/* Calendario cripto y macro — Mizuta's Blog
 * Lee /calendario.json (generado por Jekyll desde _data/eventos.yml) y añade:
 * zona horaria del lector, bloque "Esta semana" y las vistas Mes y Línea de tiempo.
 * La vista Agenda ya viene en el HTML; aquí solo se ajustan sus horas.
 */
(function () {
  'use strict';

  var raiz = document.querySelector('.cal');
  if (!raiz) return;

  var ZONAS = [
    { id: 'Europe/Madrid', nombre: 'España peninsular (Madrid)' },
    { id: 'America/Mexico_City', nombre: 'México (CDMX)' },
    { id: 'America/Bogota', nombre: 'Colombia y Perú (Bogotá, Lima)' },
    { id: 'America/Argentina/Buenos_Aires', nombre: 'Argentina (Buenos Aires)' },
    { id: 'America/New_York', nombre: 'EE. UU. y Canadá, Este (Nueva York, Toronto)' },
    { id: 'America/Chicago', nombre: 'EE. UU., Centro (Chicago, Houston)' },
    { id: 'America/Los_Angeles', nombre: 'EE. UU. y Canadá, Pacífico (Los Ángeles, Vancouver)' },
    { id: 'UTC', nombre: 'UTC' }
  ];
  var ALIAS = {
    'America/Toronto': 'America/New_York', 'America/Montreal': 'America/New_York', 'America/Detroit': 'America/New_York',
    'America/Vancouver': 'America/Los_Angeles', 'America/Tijuana': 'America/Los_Angeles',
    'America/Lima': 'America/Bogota', 'America/Guayaquil': 'America/Bogota', 'America/Panama': 'America/Bogota',
    'America/Monterrey': 'America/Mexico_City', 'America/Merida': 'America/Mexico_City', 'America/Guatemala': 'America/Mexico_City',
    'America/El_Salvador': 'America/Mexico_City', 'America/Tegucigalpa': 'America/Mexico_City', 'America/Costa_Rica': 'America/Mexico_City',
    'America/Montevideo': 'America/Argentina/Buenos_Aires', 'America/Sao_Paulo': 'America/Argentina/Buenos_Aires',
    'America/Denver': 'America/Chicago', 'America/Phoenix': 'America/Los_Angeles',
    'Europe/Berlin': 'Europe/Madrid', 'Europe/Paris': 'Europe/Madrid', 'Europe/Rome': 'Europe/Madrid',
    'Europe/Amsterdam': 'Europe/Madrid', 'Europe/Brussels': 'Europe/Madrid', 'Europe/Vienna': 'Europe/Madrid', 'Europe/Zurich': 'Europe/Madrid'
  };
  var CAT = { macro: 'Macro', cripto: 'Cripto', regulacion: 'Regulación' };
  var MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  var MESES_C = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  var DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  var DIAS_C = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];

  /* ── Preferencias guardadas (pueden fallar en modo privado) ── */
  function leer(clave) { try { return localStorage.getItem(clave); } catch (e) { return null; } }
  function guardar(clave, valor) { try { localStorage.setItem(clave, valor); } catch (e) {} }

  function detectarZona() {
    var tz = '';
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
    if (ZONAS.some(function (z) { return z.id === tz; })) return tz;
    if (ALIAS[tz]) return ALIAS[tz];
    if (tz.indexOf('America/Argentina') === 0) return 'America/Argentina/Buenos_Aires';
    return 'Europe/Madrid';
  }

  var guardada = leer('mizuta-cal-zona');
  var zona = ZONAS.some(function (z) { return z.id === guardada; }) ? guardada : detectarZona();
  var vista = /^#vista-(agenda|mes|linea)$/.test(location.hash) ? location.hash.slice(7) : (leer('mizuta-cal-vista') || 'agenda');
  if (['agenda', 'mes', 'linea'].indexOf(vista) < 0) vista = 'agenda';

  /* ── Utilidades de fecha en la zona elegida ── */
  function diaEnZona(fecha) {
    return new Intl.DateTimeFormat('en-CA', { timeZone: zona, year: 'numeric', month: '2-digit', day: '2-digit' }).format(fecha);
  }
  function horaEnZona(fecha) {
    return new Intl.DateTimeFormat('es-ES', { timeZone: zona, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(fecha);
  }
  function partes(iso) { var p = iso.split('-'); return { y: +p[0], m: +p[1], d: +p[2] }; }
  function diaSemana(iso) { var p = partes(iso); return new Date(Date.UTC(p.y, p.m - 1, p.d)).getUTCDay(); }
  function sumarDias(iso, n) { var p = partes(iso); return new Date(Date.UTC(p.y, p.m - 1, p.d + n)).toISOString().slice(0, 10); }

  /* Hora de un evento en la zona elegida; si allí cae otro día, lo indica. */
  function textoHora(ev) {
    if (!ev.utc) return 'Todo el día';
    var f = new Date(ev.utc);
    var texto = horaEnZona(f);
    var dia = diaEnZona(f);
    if (dia !== ev.dia) texto += ' (' + DIAS_C[diaSemana(dia)] + ' ' + partes(dia).d + ')';
    return texto;
  }

  /* ── Pequeño ayudante para crear elementos sin innerHTML ── */
  function el(etiqueta, atributos, hijos) {
    var n = document.createElement(etiqueta);
    if (atributos) Object.keys(atributos).forEach(function (k) {
      if (k === 'texto') n.textContent = atributos[k];
      else if (k === 'clase') n.className = atributos[k];
      else n.setAttribute(k, atributos[k]);
    });
    (hijos || []).forEach(function (h) { if (h) n.appendChild(h); });
    return n;
  }
  function etiquetaCat(ev) { return el('span', { clase: 'cal-cat cal-cat--' + ev.categoria, texto: CAT[ev.categoria] || ev.categoria }); }

  /* ── Datos ── */
  var eventos = [];
  var porDia = {};
  var meses = [];

  fetch('/calendario.json', { cache: 'no-cache' })
    .then(function (r) { return r.json(); })
    .then(function (datos) {
      eventos = datos.eventos || [];
      eventos.forEach(function (ev) {
        (porDia[ev.dia] = porDia[ev.dia] || []).push(ev);
        var m = ev.dia.slice(0, 7);
        if (meses.indexOf(m) < 0) meses.push(m);
      });
      iniciar();
    })
    .catch(function () { /* Sin JSON, la Agenda del HTML sigue funcionando en UTC. */ });

  function iniciar() {
    montarZona();
    montarVistas();
    pintarTodo();
  }

  function pintarTodo() {
    actualizarHorasAgenda();
    pintarSemana();
    if (vista === 'mes') pintarMes();
    if (vista === 'linea') pintarLinea();
    var nota = document.getElementById('cal-nota');
    var nombre = ZONAS.filter(function (z) { return z.id === zona; })[0].nombre;
    nota.textContent = 'Horas en ' + nombre + '. Recordamos tu vista y tu zona horaria en este navegador.';
  }

  /* ── Zona horaria ── */
  function montarZona() {
    var sel = document.getElementById('cal-zona');
    ZONAS.forEach(function (z) {
      var o = el('option', { value: z.id, texto: z.nombre });
      if (z.id === zona) o.selected = true;
      sel.appendChild(o);
    });
    sel.addEventListener('change', function () {
      zona = sel.value;
      guardar('mizuta-cal-zona', zona);
      pintarTodo();
    });
  }

  function actualizarHorasAgenda() {
    var horas = raiz.querySelectorAll('#cal-vista-agenda time[data-utc]');
    Array.prototype.forEach.call(horas, function (t) {
      var utc = t.getAttribute('data-utc');
      t.textContent = textoHora({ utc: utc, dia: utc.slice(0, 10) });
    });
  }

  /* ── Selector de vistas ── */
  function montarVistas() {
    document.getElementById('cal-controles').hidden = false;
    var botones = raiz.querySelectorAll('.cal-vistas button');
    Array.prototype.forEach.call(botones, function (b) {
      b.addEventListener('click', function () { cambiarVista(b.getAttribute('data-vista'), true); });
    });
    cambiarVista(vista, false);
    window.addEventListener('hashchange', function () {
      var m = /^#vista-(agenda|mes|linea)$/.exec(location.hash);
      if (m) cambiarVista(m[1], true);
    });
  }

  function cambiarVista(nueva, guardarla) {
    vista = nueva;
    ['agenda', 'mes', 'linea'].forEach(function (v) {
      document.getElementById('cal-vista-' + v).hidden = v !== vista;
    });
    Array.prototype.forEach.call(raiz.querySelectorAll('.cal-vistas button'), function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-vista') === vista ? 'true' : 'false');
    });
    if (vista === 'mes') pintarMes();
    if (vista === 'linea') pintarLinea();
    if (guardarla) {
      guardar('mizuta-cal-vista', vista);
      if (history.replaceState) history.replaceState(null, '', '#vista-' + vista);
    }
  }

  /* ── Esta semana (hoy + 6 días, en la zona del lector) ── */
  function pintarSemana() {
    var hoy = diaEnZona(new Date());
    var fin = sumarDias(hoy, 6);
    var lista = eventos.filter(function (ev) {
      var dia = ev.utc ? diaEnZona(new Date(ev.utc)) : ev.dia;
      return dia >= hoy && dia <= fin;
    });
    var seccion = document.getElementById('cal-semana');
    var cont = document.getElementById('cal-semana-lista');
    var puntos = document.getElementById('cal-puntos');
    cont.textContent = '';
    puntos.textContent = '';
    seccion.hidden = lista.length === 0;
    if (!lista.length) return;
    var ph = partes(hoy), pf = partes(fin);
    document.getElementById('cal-semana-rango').textContent =
      ph.d + (ph.m !== pf.m ? ' de ' + MESES[ph.m - 1] : '') + ' – ' + pf.d + ' de ' + MESES[pf.m - 1];
    lista.forEach(function (ev, i) {
      var dia = ev.utc ? diaEnZona(new Date(ev.utc)) : ev.dia;
      cont.appendChild(el('article', { clase: 'cal-tarjeta' }, [
        el('div', { clase: 'cal-tarjeta-cab' }, [
          el('span', { clase: 'cal-tarjeta-fecha', texto: DIAS_C[diaSemana(dia)] + ' ' + partes(dia).d }),
          etiquetaCat(ev)
        ]),
        el('h3', { texto: ev.titulo }),
        el('p', { clase: 'cal-tarjeta-hora', texto: textoHora(ev) })
      ]));
      puntos.appendChild(el('span', { clase: i === 0 ? 'activo' : '' }));
    });
    cont.onscroll = function () {
      var max = cont.scrollWidth - cont.clientWidth;
      var i = max > 0 ? Math.round(cont.scrollLeft / max * (lista.length - 1)) : 0;
      Array.prototype.forEach.call(puntos.children, function (p, j) { p.className = j === i ? 'activo' : ''; });
    };
    puntos.hidden = cont.scrollWidth <= cont.clientWidth + 1;
  }

  /* ── Vista Mes ── */
  var mesVisto = null;
  var diaElegido = null;

  function pintarMes() {
    var cont = document.getElementById('cal-vista-mes');
    cont.textContent = '';
    if (!meses.length) { cont.appendChild(el('p', { texto: 'No hay eventos próximos.' })); return; }
    if (!mesVisto || meses.indexOf(mesVisto) < 0) mesVisto = meses[0];
    var idx = meses.indexOf(mesVisto);
    var p = partes(mesVisto + '-01');
    if (!diaElegido || diaElegido.slice(0, 7) !== mesVisto) {
      var primero = eventos.filter(function (ev) { return ev.dia.slice(0, 7) === mesVisto; })[0];
      diaElegido = primero ? primero.dia : mesVisto + '-01';
    }

    var anterior = el('button', { type: 'button', clase: 'cal-flecha', 'aria-label': 'Mes anterior' });
    anterior.appendChild(flecha('M15 18l-6-6 6-6'));
    anterior.disabled = idx <= 0;
    anterior.addEventListener('click', function () { mesVisto = meses[idx - 1]; pintarMes(); });
    var siguiente = el('button', { type: 'button', clase: 'cal-flecha', 'aria-label': 'Mes siguiente' });
    siguiente.appendChild(flecha('M9 18l6-6-6-6'));
    siguiente.disabled = idx >= meses.length - 1;
    siguiente.addEventListener('click', function () { mesVisto = meses[idx + 1]; pintarMes(); });
    var selector = el('select', { 'aria-label': 'Ir al mes', clase: 'cal-mes-selector' });
    meses.forEach(function (m) {
      var pm = partes(m + '-01');
      var o = el('option', { value: m, texto: mayus(MESES[pm.m - 1]) + ' ' + pm.y });
      if (m === mesVisto) o.selected = true;
      selector.appendChild(o);
    });
    selector.addEventListener('change', function () { mesVisto = selector.value; pintarMes(); });

    var rejilla = el('div', { clase: 'cal-rejilla' });
    ['lun', 'mar', 'mié', 'jue', 'vie', 'sáb', 'dom'].forEach(function (d) {
      rejilla.appendChild(el('div', { clase: 'cal-rejilla-dia', 'aria-hidden': 'true', texto: d }));
    });
    var inicio = (new Date(Date.UTC(p.y, p.m - 1, 1)).getUTCDay() + 6) % 7;
    var dias = new Date(Date.UTC(p.y, p.m, 0)).getUTCDate();
    for (var v = 0; v < inicio; v++) rejilla.appendChild(el('div', { clase: 'cal-celda cal-celda--vacia', 'aria-hidden': 'true' }));
    for (var d = 1; d <= dias; d++) {
      (function (d) {
        var iso = mesVisto + '-' + (d < 10 ? '0' : '') + d;
        var lista = porDia[iso] || [];
        var b = el('button', {
          type: 'button', clase: 'cal-celda' + (iso === diaElegido ? ' cal-celda--elegida' : ''),
          'aria-pressed': iso === diaElegido ? 'true' : 'false',
          'aria-label': d + ' de ' + MESES[p.m - 1] + (lista.length ? ', ' + lista.length + (lista.length > 1 ? ' eventos' : ' evento') : '')
        }, [el('span', { clase: 'cal-celda-num', texto: String(d) })]);
        var marcas = el('span', { clase: 'cal-celda-marcas', 'aria-hidden': 'true' });
        lista.forEach(function (ev) { marcas.appendChild(el('span', { clase: 'cal-marca cal-marca--' + ev.categoria, texto: corto(ev) })); });
        b.appendChild(marcas);
        b.addEventListener('click', function () { diaElegido = iso; pintarMes(); });
        rejilla.appendChild(b);
      })(d);
    }

    var pd = partes(diaElegido);
    var elegidos = porDia[diaElegido] || [];
    var panel = el('aside', { clase: 'cal-dia', 'aria-live': 'polite' }, [
      el('h3', { texto: mayus(DIAS[diaSemana(diaElegido)]) + ' ' + pd.d + ' de ' + MESES[pd.m - 1] })
    ]);
    if (!elegidos.length) panel.appendChild(el('p', { texto: 'No hay eventos importantes este día.' }));
    elegidos.forEach(function (ev) { panel.appendChild(tarjetaDetalle(ev)); });

    cont.appendChild(el('div', { clase: 'cal-mes-cab' }, [anterior, selector, siguiente]));
    cont.appendChild(el('div', { clase: 'cal-mes-cuerpo' }, [rejilla, panel]));
  }

  function tarjetaDetalle(ev) {
    var fuente = el('a', { href: ev.fuente, target: '_blank', rel: 'noopener', texto: 'Fuente' });
    return el('div', { clase: 'cal-detalle' }, [
      el('div', { clase: 'cal-ev-etiquetas' }, [etiquetaCat(ev), ev.estado === 'provisional' ? el('span', { clase: 'cal-prov', texto: 'Provisional' }) : null]),
      el('p', { clase: 'cal-detalle-titulo', texto: ev.titulo }),
      el('p', { clase: 'cal-detalle-hora', texto: textoHora(ev) }),
      el('p', { clase: 'cal-ev-ctx', texto: ev.contexto }),
      el('p', { clase: 'cal-ev-meta' }, [document.createTextNode((ev.activos || []).join(', ') + ' · '), fuente])
    ]);
  }

  /* ── Vista Línea de tiempo ── */
  function pintarLinea() {
    var cont = document.getElementById('cal-vista-linea');
    cont.textContent = '';
    var lista = el('ol', { clase: 'cal-linea' });
    eventos.forEach(function (ev) {
      var p = partes(ev.dia);
      lista.appendChild(el('li', { clase: 'cal-linea-item cal-linea-item--' + ev.categoria }, [
        el('span', { clase: 'cal-linea-fecha', texto: p.d + ' ' + MESES_C[p.m - 1] }),
        el('div', { clase: 'cal-linea-cuerpo' }, [
          el('p', { clase: 'cal-linea-titulo', texto: ev.titulo + (ev.estado === 'provisional' ? ' (provisional)' : '') }),
          el('p', { clase: 'cal-linea-meta', texto: (CAT[ev.categoria] || '') + ' · ' + (ev.activos || []).join(', ') + ' · ' + textoHora(ev) })
        ])
      ]));
    });
    cont.appendChild(lista);
  }

  /* ── Varios ── */
  function mayus(t) { return t.charAt(0).toUpperCase() + t.slice(1); }
  function corto(ev) {
    var id = ev.id;
    if (id.indexOf('actas-fomc') > -1) return 'Actas Fed';
    if (id.indexOf('fomc-estrategia') > -1) return 'Fed (estrategia)';
    if (id.indexOf('deribit') > -1) return 'Deribit';
    if (id.indexOf('financiacion') > -1) return 'Gobierno EE. UU.';
    if (id.indexOf('genius') > -1) return 'Ley GENIUS';
    if (id.indexOf('dac8') > -1) return 'DAC8';
    if (id.indexOf('jenner') > -1) return 'BNB fork';
    var tipo = id.split('-').pop();
    var nombres = { fomc: 'Fed', cpi: 'CPI', nfp: 'Empleo', ppi: 'PPI', pce: 'PCE', bce: 'BCE', boj: 'Banco de Japón' };
    if (nombres[tipo]) return nombres[tipo];
    if (ev.categoria === 'cripto' && ev.activos && ev.activos.length) return ev.activos[0];
    return ev.titulo;
  }
  function flecha(d) {
    var ns = 'http://www.w3.org/2000/svg';
    var s = document.createElementNS(ns, 'svg');
    s.setAttribute('width', '18'); s.setAttribute('height', '18'); s.setAttribute('viewBox', '0 0 24 24');
    s.setAttribute('fill', 'none'); s.setAttribute('stroke', 'currentColor'); s.setAttribute('stroke-width', '2');
    s.setAttribute('stroke-linecap', 'round'); s.setAttribute('stroke-linejoin', 'round'); s.setAttribute('aria-hidden', 'true');
    var path = document.createElementNS(ns, 'path'); path.setAttribute('d', d); s.appendChild(path);
    return s;
  }

  /* ── Copiar enlace de suscripción ── */
  var btnCopiar = document.getElementById('cal-copiar');
  if (btnCopiar && navigator.clipboard && window.isSecureContext) {
    btnCopiar.hidden = false;
    var textoCopiar = btnCopiar.textContent;
    btnCopiar.addEventListener('click', function () {
      navigator.clipboard.writeText(btnCopiar.getAttribute('data-url')).then(function () {
        btnCopiar.textContent = '¡Copiado!';
        setTimeout(function () { btnCopiar.textContent = textoCopiar; }, 2000);
      }, function () {
        btnCopiar.textContent = 'No se pudo copiar';
        setTimeout(function () { btnCopiar.textContent = textoCopiar; }, 2000);
      });
    });
  }
})();
