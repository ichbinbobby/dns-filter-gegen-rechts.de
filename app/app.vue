<script setup lang="ts">
const listUrl = 'https://dns-filter-gegen-rechts.de/domains'
const copyStatus = ref<'idle' | 'copied' | 'failed'>('idle')

useSeoMeta({
  title: 'DNS-Filter gegen Rechts – Eine offene Domainliste',
  description: 'Eine transparente, offene DNS-Filterliste gegen rechte Hetze im Netz. Für Pi-hole, FRITZ!Box und weitere DNS-Filter.',
  ogTitle: 'DNS-Filter gegen Rechts',
  ogDescription: 'Eine offene Domainliste. Transparent kuratiert und einfach einzubinden.',
  ogUrl: 'https://dns-filter-gegen-rechts.de',
  ogType: 'website',
  themeColor: '#f6f5f0'
})

async function copyListUrl() {
  let success = false

  try {
    await navigator.clipboard.writeText(listUrl)
    success = true
  } catch {
    const textArea = document.createElement('textarea')
    textArea.value = listUrl
    textArea.setAttribute('readonly', '')
    textArea.style.position = 'fixed'
    textArea.style.opacity = '0'
    document.body.appendChild(textArea)
    textArea.select()
    success = document.execCommand('copy')
    textArea.remove()
  }

  copyStatus.value = success ? 'copied' : 'failed'
  if (!success) {
    console.error('Die Listen-URL konnte nicht kopiert werden.')
  }

  window.setTimeout(() => {
    copyStatus.value = 'idle'
  }, 2000)
}
</script>

<template>
  <UApp>
    <div class="site-shell">
    <header class="site-header">
      <a class="wordmark" href="#start" aria-label="DNS-Filter gegen Rechts – Startseite">
        <span class="wordmark-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M16 3 27 7v8c0 7.3-4.7 11.8-11 14C9.7 26.8 5 22.3 5 15V7l11-4Z" />
            <path d="m10.5 16 3.6 3.6 7.6-8" />
          </svg>
        </span>
        <span>dns-filter<span class="wordmark-soft">-gegen-rechts</span></span>
      </a>
      <nav class="main-nav" aria-label="Hauptnavigation">
        <a href="#liste">Die Liste</a>
        <a href="#prinzip">So funktioniert's</a>
        <UButton to="#einbinden" class="nav-cta" color="neutral" variant="outline">Einbinden <span aria-hidden="true">↗</span></UButton>
      </nav>
    </header>

    <main>
      <section id="start" class="hero">
        <div class="hero-copy">
          <div class="eyebrow"><span class="status-dot" /> Ein offenes Projekt aus Deutschland</div>
          <h1>Weniger Raum<br>für <span>rechte Hetze.</span></h1>
          <p class="hero-lead">
            Eine offene DNS-Filterliste, die dabei hilft, rechte und rechtsextreme Inhalte im Netz zu blockieren.
            Für dein Heimnetz — mit dem DNS-Filter deiner Wahl.
          </p>
          <div class="hero-actions">
            <UButton to="#liste" class="button button-dark" color="neutral" variant="solid">Die Liste entdecken <span aria-hidden="true">↓</span></UButton>
            <a class="text-link" href="#prinzip">Wie funktioniert das? <span aria-hidden="true">→</span></a>
          </div>
          <div class="hero-note">
            <span class="note-mark" aria-hidden="true">i</span>
            <p>Die Liste ist noch im Aufbau und enthält aktuell <strong>keine Einträge.</strong></p>
          </div>
        </div>

        <div class="hero-art" aria-label="Illustration einer geschützten DNS-Verbindung">
          <div class="art-orbit orbit-one" />
          <div class="art-orbit orbit-two" />
          <div class="art-cross cross-one" />
          <div class="art-cross cross-two" />
          <div class="art-card">
            <div class="art-card-top">
              <span class="art-label">DNS FILTER</span>
              <span class="live-pill"><span /> LISTE IM AUFBAU</span>
            </div>
            <div class="shield-illustration">
              <svg viewBox="0 0 112 126" fill="none" aria-hidden="true">
                <path d="M56 5 103 22v34c0 31-20.1 50.3-47 64C29.1 106.3 9 87 9 56V22L56 5Z" fill="#D9E7D7" stroke="#1D392F" stroke-width="2" />
                <path d="m36 60 14 14 28-30" stroke="#1D392F" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="art-domain">
              <span class="domain-indicator" />
              <span>Dein DNS. Deine Regeln.</span>
              <span class="domain-arrow">↗</span>
            </div>
            <div class="art-card-bottom">
              <span>OFFEN</span><span class="bottom-divider" /><span>TRANSPARENT</span><span class="bottom-divider" /><span>FÜR ALLE</span>
            </div>
          </div>
          <span class="art-caption caption-top">Eine gemeinsame<br>digitale Zivilcourage.</span>
          <span class="art-caption caption-bottom">FILTER MIT HALTUNG <span aria-hidden="true">✳</span></span>
        </div>
      </section>

      <section class="ticker" aria-label="Projektprinzipien">
        <span>Offen statt undurchsichtig</span><i>✳</i>
        <span>Einfach statt kompliziert</span><i>✳</i>
        <span>Gemeinsam statt allein</span><i>✳</i>
        <span class="ticker-last">Offen statt undurchsichtig</span>
      </section>

      <section id="prinzip" class="intro-section section-wrap">
        <div class="section-kicker"><span>01</span> Worum es geht</div>
        <div class="intro-content">
          <h2>Ein kleiner Schritt<br>für ein <em>besseres Netz.</em></h2>
          <div class="intro-description">
            <p>
              DNS-Filter können bekannte Domains blockieren, bevor eine Verbindung aufgebaut wird.
              Diese Liste soll es einfacher machen, rechte und rechtsextreme Online-Angebote im eigenen
              Netzwerk auszusperren.
            </p>
            <p>
              Sie ist offen, nachvollziehbar und unabhängig vom Gerät nutzbar — ob zuhause, im Büro
              oder im Verein.
            </p>
            <a href="#liste" class="inline-link">Zur Filterliste <span aria-hidden="true">↘</span></a>
          </div>
        </div>
        <div class="principle-strip">
          <div class="principle-number">01</div>
          <div><h3>Eine einfache Textliste</h3><p>Domains, klar und ohne unnötigen Ballast.</p></div>
          <div class="principle-number">02</div>
          <div><h3>Für deinen DNS-Filter</h3><p>Pi-hole, FRITZ!Box und weitere Lösungen.</p></div>
          <div class="principle-number">03</div>
          <div><h3>Offen und transparent</h3><p>Nachvollziehbar kuratiert — für alle zugänglich.</p></div>
        </div>
      </section>

      <section id="liste" class="list-section">
        <div class="section-wrap list-inner">
          <div class="section-kicker section-kicker-light"><span>02</span> Die Filterliste</div>
          <div class="list-heading">
            <div>
              <h2>Eine Liste.<br><em>Viele Möglichkeiten.</em></h2>
              <p>Die Liste wird als einfache Textdatei bereitgestellt — für DNS-Filter, die externe Domainlisten unterstützen.</p>
            </div>
            <div class="list-status">
              <span class="status-ring"><span /></span>
              <span><strong>In Vorbereitung</strong><small>Domains werden noch kuratiert</small></span>
            </div>
          </div>
          <div class="feed-card">
            <div class="feed-card-label"><span class="file-icon">TXT</span><span>PLAIN TEXT · DOMAINLISTE</span></div>
            <div class="feed-url-row">
              <code>{{ listUrl }}</code>
              <UButton class="copy-button" type="button" aria-label="URL der Filterliste kopieren" color="neutral" variant="outline" @click="copyListUrl">
                <span v-if="copyStatus === 'copied'">Kopiert ✓</span>
                <span v-else-if="copyStatus === 'failed'">Kopieren fehlgeschlagen</span>
                <span v-else>Kopieren <span aria-hidden="true">▢</span></span>
              </UButton>
            </div>
            <div class="feed-card-footer">
              <span><span class="tiny-dot" /> 0 Domains veröffentlicht</span>
              <a :href="listUrl" target="_blank" rel="noopener noreferrer">Liste öffnen <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <p class="empty-list-note"><span aria-hidden="true">!</span> Die Liste ist noch leer. Bitte noch nicht in einen DNS-Filter eintragen.</p>
        </div>
      </section>

      <section id="einbinden" class="devices-section section-wrap">
        <div class="section-kicker"><span>03</span> Dein Netzwerk, deine Wahl</div>
        <div class="devices-heading">
          <h2>Passt zu dem,<br><em>was du schon hast.</em></h2>
          <p>Ein DNS-Filter genügt. Die Liste soll sich in unterschiedliche Systeme integrieren lassen — ganz ohne neue Hardware.</p>
        </div>
        <div class="device-grid">
          <article class="device-card">
            <span class="device-index">A</span>
            <div class="device-icon pi-icon" aria-hidden="true"><span /><span /><span /></div>
            <h3>Pi-hole</h3>
            <p>Für dein Heimnetz oder deinen eigenen Server.</p>
            <span class="device-label">ANLEITUNG FOLGT</span>
          </article>
          <article class="device-card device-featured">
            <span class="device-index">B</span>
            <div class="device-icon fritz-icon" aria-hidden="true"><span>F</span></div>
            <h3>FRITZ!Box</h3>
            <p>Für Netzwerke mit einer kompatiblen FRITZ!Box.</p>
            <span class="device-label">ANLEITUNG FOLGT</span>
          </article>
          <article class="device-card">
            <span class="device-index">C</span>
            <div class="device-icon other-icon" aria-hidden="true"><span>+</span></div>
            <h3>Andere Filter</h3>
            <p>AdGuard Home, Technitium und weitere Lösungen.</p>
            <span class="device-label">ANLEITUNG FOLGT</span>
          </article>
        </div>
      </section>

      <section class="closing-section">
        <div class="closing-mark" aria-hidden="true">✳</div>
        <p>Das Netz gehört uns allen.</p>
        <h2>Mach dein Netzwerk<br><em>zu einem besseren Ort.</em></h2>
        <UButton to="#liste" class="button button-light" color="neutral" variant="solid">Zur Filterliste <span aria-hidden="true">↑</span></UButton>
      </section>
    </main>

    <footer class="site-footer">
      <a class="wordmark footer-wordmark" href="#start">
        <span class="wordmark-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M16 3 27 7v8c0 7.3-4.7 11.8-11 14C9.7 26.8 5 22.3 5 15V7l11-4Z" />
            <path d="m10.5 16 3.6 3.6 7.6-8" />
          </svg>
        </span>
        <span>dns-filter<span class="wordmark-soft">-gegen-rechts</span></span>
      </a>
      <p>Ein offenes Projekt für ein Netz mit Haltung.</p>
      <div class="footer-links">
        <a class="footer-source" href="https://github.com/ichbinbobby/dns-filter-gegen-rechts.de" target="_blank" rel="noopener noreferrer">Quellcode auf GitHub ↗</a>
        <a class="footer-top" href="#start">Nach oben ↑</a>
      </div>
      <small>© 2026 DNS-Filter gegen Rechts</small>
    </footer>
    </div>
  </UApp>
</template>

<style>
:root {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #1d2923;
  background: #f6f5f0;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

* { box-sizing: border-box; }
body { margin: 0; min-width: 320px; }
a { color: inherit; text-decoration: none; }
button { font: inherit; }

.site-shell { overflow: hidden; }
.site-header {
  width: min(1200px, calc(100% - 96px));
  height: 82px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e6e5dd;
}
.wordmark { display: inline-flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 700; letter-spacing: -.5px; }
.wordmark-icon { width: 30px; height: 30px; display: inline-flex; }
.wordmark-icon svg { width: 100%; }
.wordmark-icon path:first-child { fill: #dce8d9; stroke: #284638; stroke-width: 1.6; }
.wordmark-icon path:last-child { stroke: #284638; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.wordmark-soft { color: #81877d; font-weight: 500; }
.main-nav { display: flex; align-items: center; gap: 36px; font-size: 13px; font-weight: 500; color: #4a544c; }
.main-nav a:not(.nav-cta):hover, .text-link:hover, .inline-link:hover { color: #577c59; }
.main-nav .nav-cta { padding: 11px 16px; border: 1px solid #d5d8ce; border-radius: 4px; color: #26372d; }
.nav-cta span { padding-left: 9px; color: #738575; }

.hero {
  width: min(1200px, calc(100% - 96px));
  min-height: 622px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.08fr .92fr;
  align-items: center;
  gap: 40px;
  padding: 54px 0 74px;
}
.hero-copy { padding-top: 5px; }
.eyebrow, .section-kicker { display: flex; align-items: center; gap: 9px; color: #687669; font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; }
.status-dot, .live-pill span, .domain-indicator, .tiny-dot { width: 7px; height: 7px; flex: 0 0 7px; border-radius: 50%; background: #7d9d75; }
.hero h1, .intro-content h2, .list-heading h2, .devices-heading h2, .closing-section h2 {
  margin: 23px 0 0;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: clamp(47px, 5.3vw, 72px);
  font-weight: 600;
  letter-spacing: -.065em;
  line-height: 1.06;
}
.hero h1 span, em { color: #70896e; font-style: normal; }
.hero-lead { max-width: 480px; margin: 23px 0 0; color: #687068; font-size: 15px; line-height: 1.8; }
.hero-actions { display: flex; align-items: center; gap: 25px; margin-top: 29px; }
.button { display: inline-flex; align-items: center; justify-content: center; gap: 18px; min-height: 48px; padding: 0 19px; border-radius: 3px; font-size: 12px; font-weight: 600; transition: transform .18s ease, background .18s ease; }
.button:hover { transform: translateY(-2px); }
.button-dark { color: #fff; background: #20382d; }
.button-dark:hover { background: #304d3d; }
.text-link, .inline-link { color: #46574a; font-size: 12px; font-weight: 600; transition: color .18s ease; }
.text-link span { padding-left: 6px; }
.hero-note { display: flex; align-items: flex-start; gap: 10px; margin-top: 35px; color: #7a7f75; }
.note-mark { display: flex; align-items: center; justify-content: center; width: 16px; height: 16px; border: 1px solid #c5c8bb; border-radius: 50%; font-size: 10px; }
.hero-note p { margin: 0; font-size: 11px; line-height: 1.55; }
.hero-note strong { color: #4e5e4d; font-weight: 600; }

.hero-art { position: relative; width: 100%; max-width: 480px; height: 424px; justify-self: end; display: flex; align-items: center; justify-content: center; }
.art-orbit { position: absolute; border: 1px solid #e0e2d9; border-radius: 50%; }
.orbit-one { width: 390px; height: 390px; }
.orbit-two { width: 310px; height: 310px; border-style: dashed; }
.art-cross { position: absolute; width: 10px; height: 10px; }
.art-cross::before, .art-cross::after { position: absolute; content: ''; background: #81947c; }
.art-cross::before { width: 10px; height: 1px; top: 4px; }
.art-cross::after { width: 1px; height: 10px; left: 4px; }
.cross-one { top: 30px; right: 90px; }
.cross-two { bottom: 56px; left: 38px; transform: scale(.7); }
.art-card { z-index: 1; width: 310px; height: 340px; padding: 22px 23px 15px; background: #fff; border: 1px solid #e6e7df; box-shadow: 0 20px 60px #253b2d12; transform: rotate(-2.5deg); }
.art-card-top, .art-domain, .art-card-bottom { display: flex; align-items: center; }
.art-card-top { justify-content: space-between; }
.art-label, .live-pill, .art-card-bottom, .caption-bottom { font-size: 8px; font-weight: 700; letter-spacing: .12em; }
.art-label { color: #758076; }
.live-pill { display: flex; align-items: center; gap: 6px; color: #758076; font-size: 7px; }
.live-pill span { width: 5px; height: 5px; flex-basis: 5px; background: #c9a268; }
.shield-illustration { display: flex; align-items: center; justify-content: center; height: 224px; background-image: radial-gradient(#e9ebe3 1px, transparent 1px); background-size: 13px 13px; }
.shield-illustration svg { width: 94px; height: 106px; filter: drop-shadow(0 10px 12px #344c3517); }
.art-domain { height: 40px; gap: 8px; padding: 0 10px; color: #566157; background: #f6f7f3; font-size: 9px; }
.domain-indicator { width: 6px; height: 6px; flex-basis: 6px; }
.domain-arrow { margin-left: auto; color: #8d978b; }
.art-card-bottom { justify-content: space-between; margin-top: 13px; color: #858b80; font-size: 6px; }
.bottom-divider { width: 1px; height: 8px; background: #daddd4; }
.art-caption { position: absolute; color: #727d70; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 11px; font-weight: 600; line-height: 1.5; }
.caption-top { top: 66px; left: 3px; }
.caption-bottom { right: 15px; bottom: 27px; font-family: inherit; font-size: 8px; letter-spacing: .13em; }
.caption-bottom span { margin-left: 7px; color: #82977c; font-size: 14px; vertical-align: -2px; }

.ticker { height: 60px; display: flex; align-items: center; justify-content: center; gap: clamp(24px, 5vw, 72px); border-top: 1px solid #e5e4dc; border-bottom: 1px solid #e5e4dc; color: #677267; font-size: 11px; letter-spacing: .01em; }
.ticker i { color: #8ca185; font-style: normal; font-size: 13px; }
.section-wrap { width: min(1080px, calc(100% - 96px)); margin: 0 auto; }
.intro-section { padding-top: 112px; padding-bottom: 108px; }
.section-kicker span { color: #99a093; font-size: 10px; }
.intro-content { display: grid; grid-template-columns: 1fr .75fr; gap: 80px; align-items: end; margin-top: 28px; }
.intro-content h2, .devices-heading h2 { margin: 0; font-size: clamp(39px, 4vw, 55px); }
.intro-description p { margin: 0 0 13px; color: #6a7169; font-size: 13px; line-height: 1.8; }
.inline-link { display: inline-block; margin-top: 8px; }
.inline-link span { padding-left: 7px; }
.principle-strip { display: grid; grid-template-columns: 32px 1fr 32px 1fr 32px 1fr; align-items: start; gap: 12px; margin-top: 69px; padding-top: 23px; border-top: 1px solid #dfe1d8; }
.principle-number { color: #91a18d; font-family: inherit; font-size: 11px; }
.principle-strip h3 { margin: 0 0 7px; font-size: 12px; font-weight: 600; }
.principle-strip p { max-width: 180px; margin: 0; color: #82877e; font-size: 11px; line-height: 1.6; }

.list-section { padding: 86px 0 93px; color: #f3f4ed; background: #20382d; }
.section-kicker-light { color: #bdc9b9; }
.section-kicker-light span { color: #819284; }
.list-heading { display: flex; justify-content: space-between; align-items: end; gap: 45px; margin: 25px 0 34px; }
.list-heading h2 { margin: 0; font-size: clamp(40px, 4.5vw, 59px); }
.list-heading h2 em { color: #bdcdb7; }
.list-heading > div:first-child > p { max-width: 475px; margin: 16px 0 0; color: #bdc6bb; font-size: 13px; line-height: 1.7; }
.list-status { display: flex; align-items: center; gap: 12px; margin-bottom: 5px; }
.status-ring { display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid #526454; border-radius: 50%; }
.status-ring span { width: 7px; height: 7px; border-radius: 50%; background: #d6bd8b; }
.list-status strong, .list-status small { display: block; }
.list-status strong { font-size: 11px; font-weight: 600; }
.list-status small { margin-top: 5px; color: #abb9a9; font-size: 10px; }
.feed-card { padding: 19px 21px 0; color: #26372d; background: #f8f8f3; border-radius: 4px; }
.feed-card-label { display: flex; align-items: center; gap: 10px; color: #798276; font-size: 9px; font-weight: 700; letter-spacing: .11em; }
.file-icon { display: grid; width: 30px; height: 30px; place-items: center; border: 1px solid #dfe3d9; border-radius: 3px; color: #748371; font-size: 8px; letter-spacing: .04em; }
.feed-url-row { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 19px 0; border-bottom: 1px solid #e4e6de; }
.feed-url-row code { overflow: auto; color: #344a39; font-family: inherit; font-size: 13px; }
.copy-button { flex: 0 0 auto; padding: 9px 12px; border: 1px solid #d8ddd3; border-radius: 3px; color: #455347; background: transparent; cursor: pointer; font-size: 10px; font-weight: 600; }
.copy-button:hover { background: #edf0e9; }
.copy-button span span { padding-left: 5px; }
.feed-card-footer { display: flex; justify-content: space-between; align-items: center; min-height: 43px; color: #7b8378; font-size: 10px; }
.feed-card-footer > span { display: flex; align-items: center; gap: 7px; }
.tiny-dot { width: 5px; height: 5px; flex-basis: 5px; background: #c29c60; }
.feed-card-footer a { color: #415343; font-weight: 600; }
.feed-card-footer a span { padding-left: 4px; }
.empty-list-note { margin: 13px 0 0; color: #bec7bb; font-size: 10px; }
.empty-list-note span { display: inline-grid; width: 14px; height: 14px; margin-right: 5px; place-items: center; border: 1px solid #869687; border-radius: 50%; font-size: 9px; }

.devices-section { padding-top: 103px; padding-bottom: 110px; }
.devices-heading { display: flex; justify-content: space-between; align-items: end; gap: 60px; margin-top: 27px; }
.devices-heading h2 { flex: 0 0 auto; }
.devices-heading > p { max-width: 380px; margin: 0 0 7px; color: #70776e; font-size: 13px; line-height: 1.8; }
.device-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 43px; }
.device-card { position: relative; min-height: 227px; padding: 24px; border: 1px solid #e1e3da; background: #f8f8f4; }
.device-featured { background: #edf0e9; border-color: #d8dfd3; }
.device-index { position: absolute; top: 22px; right: 23px; color: #a0a698; font-family: inherit; font-size: 10px; }
.device-icon { width: 39px; height: 39px; display: flex; align-items: center; justify-content: center; margin-bottom: 17px; border: 1px solid #dfe3da; border-radius: 50%; }
.pi-icon { flex-direction: column; gap: 3px; }
.pi-icon span { width: 11px; height: 2px; border-radius: 2px; background: #71856f; }
.fritz-icon span { color: #b94a3f; font-family: ui-sans-serif, system-ui, sans-serif; font-size: 19px; font-weight: 800; }
.other-icon span { color: #71856f; font-size: 23px; font-weight: 400; }
.device-card h3 { margin: 0; font-family: inherit; font-size: 16px; font-weight: 700; letter-spacing: -.03em; }
.device-card p { margin: 8px 0 17px; color: #7a8077; font-size: 11px; line-height: 1.6; }
.device-label { color: #879283; font-size: 8px; font-weight: 700; letter-spacing: .1em; }

.closing-section { padding: 72px 24px 78px; color: #f2f4ed; text-align: center; background: #748a70; }
.closing-mark { color: #d2dec9; font-size: 22px; }
.closing-section > p { margin: 11px 0 0; color: #d8e0d4; font-size: 11px; letter-spacing: .08em; }
.closing-section h2 { margin: 18px 0 26px; font-size: clamp(36px, 4.2vw, 54px); }
.closing-section h2 em { color: #d6e0d0; }
.button-light { color: #314335; background: #f5f5ee; }
.button-light:hover { background: white; }
.site-footer { width: min(1200px, calc(100% - 96px)); min-height: 91px; margin: 0 auto; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 10px 30px; }
.footer-wordmark { font-size: 12px; }
.footer-wordmark .wordmark-icon { width: 25px; height: 25px; }
.site-footer > p { margin: 0; color: #83887e; font-size: 10px; }
.footer-links { display: flex; align-items: center; gap: 22px; }
.footer-source, .footer-top { color: #566357; font-size: 10px; font-weight: 600; }
.site-footer > small { grid-column: 1 / -1; margin-top: -22px; color: #9a9e94; font-size: 9px; }

@media (min-width: 1400px) {
  .hero { min-height: 680px; }
}
@media (max-width: 850px) {
  .site-header, .hero, .section-wrap, .site-footer { width: calc(100% - 56px); }
  .hero { grid-template-columns: 1fr 0.9fr; gap: 12px; min-height: 570px; }
  .hero-art { transform: scale(.86); transform-origin: center right; margin-left: -35px; }
  .hero h1 { font-size: clamp(46px, 7vw, 62px); }
  .intro-content { gap: 40px; }
  .principle-strip { grid-template-columns: 25px 1fr 25px 1fr; }
  .principle-strip > :nth-child(n+5) { display: none; }
  .ticker { gap: 25px; }
  .ticker-last, .ticker i:last-of-type { display: none; }
}
@media (max-width: 620px) {
  .site-header, .hero, .section-wrap, .site-footer { width: calc(100% - 40px); }
  .site-header { height: 68px; }
  .wordmark { gap: 7px; font-size: 12px; }
  .wordmark-icon { width: 25px; height: 25px; }
  .main-nav { gap: 0; }
  .main-nav a:not(.nav-cta) { display: none; }
  .main-nav .nav-cta { padding: 9px 11px; font-size: 11px; }
  .hero { display: flex; flex-direction: column; align-items: stretch; gap: 10px; padding: 56px 0 48px; }
  .hero h1 { margin-top: 20px; font-size: clamp(49px, 13vw, 67px); }
  .hero-lead { max-width: 410px; font-size: 14px; }
  .hero-actions { gap: 17px; }
  .button { min-height: 45px; gap: 11px; padding: 0 14px; font-size: 11px; }
  .text-link { font-size: 11px; }
  .hero-note { margin-top: 25px; }
  .hero-art { width: 100%; height: 355px; max-width: 430px; margin: 0 auto; transform: scale(.83); transform-origin: top center; }
  .ticker { height: 50px; justify-content: flex-start; gap: 19px; overflow: hidden; padding: 0 20px; white-space: nowrap; font-size: 10px; }
  .ticker span:nth-of-type(3), .ticker i:nth-of-type(2) { display: none; }
  .intro-section { padding-top: 75px; padding-bottom: 75px; }
  .intro-content { grid-template-columns: 1fr; gap: 22px; margin-top: 22px; }
  .intro-content h2, .devices-heading h2 { font-size: 42px; }
  .intro-description p { font-size: 12px; }
  .principle-strip { grid-template-columns: 24px 1fr; row-gap: 22px; margin-top: 39px; }
  .principle-strip > :nth-child(n+5) { display: initial; }
  .list-section { padding: 69px 0 72px; }
  .list-heading { display: block; margin-top: 22px; }
  .list-heading h2 { font-size: 43px; }
  .list-heading > div:first-child > p { font-size: 12px; }
  .list-status { margin-top: 22px; }
  .feed-card { padding: 15px 14px 0; }
  .feed-url-row { align-items: flex-start; flex-direction: column; gap: 13px; padding: 15px 0; }
  .feed-url-row code { max-width: 100%; font-size: 11px; }
  .copy-button { align-self: flex-end; }
  .feed-card-footer { min-height: 42px; font-size: 9px; }
  .empty-list-note { line-height: 1.6; }
  .devices-section { padding-top: 75px; padding-bottom: 78px; }
  .devices-heading { display: block; margin-top: 22px; }
  .devices-heading > p { margin-top: 19px; font-size: 12px; }
  .device-grid { grid-template-columns: 1fr; gap: 10px; margin-top: 27px; }
  .device-card { min-height: auto; padding: 19px; }
  .device-icon { margin-bottom: 13px; }
  .device-card p { margin-bottom: 13px; }
  .closing-section { padding: 58px 18px 62px; }
  .closing-section h2 { font-size: 39px; }
  .site-footer { min-height: 105px; grid-template-columns: 1fr auto; gap: 5px 12px; }
  .site-footer > p { grid-column: 1; grid-row: 2; }
  .footer-links { grid-column: 2; grid-row: 1; flex-direction: column; align-items: flex-end; gap: 6px; }
  .site-footer > small { grid-row: 3; margin-top: 0; }
}
@media (prefers-reduced-motion: reduce) {
  :root { scroll-behavior: auto; }
  *, *::before, *::after { transition-duration: .01ms !important; }
}
</style>
