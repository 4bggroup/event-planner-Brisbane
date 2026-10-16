'use strict';
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
$('#year').textContent = new Date().getFullYear();
const menu = $('.menu-toggle');
const mobileNav = $('#mobileNav');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open menu'); mobileNav.hidden = true; }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); mobileNav.hidden = !open; });
$$('a', mobileNav).forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menu.focus(); } });
window.matchMedia('(min-width: 901px)').addEventListener('change', e => { if (e.matches) closeMenu(); });
const services = [
{ title: 'A day that feels like you.', label: 'YOUR DAY, YOUR WAY', image: 'clear-wedding-portrait.webp', alt: 'Couple at a floral ceremony arch beside the Brisbane River', description: 'Thoughtful support with the plans, the people and the finishing touches, from your first ideas to your last dance.', cta: "Let's talk weddings", value: 'Wedding planning' },
{ title: 'Every detail, in good company.', label: 'THE ART OF A BEAUTIFUL ATMOSPHERE', image: 'clear-styling-tablescape.webp', alt: 'Candlelit tables with elegant white floral arrangements', description: 'Colour, texture, flowers and a setting that comes together naturally. A considered design direction, with your personality at its heart.', cta: "Let's talk styling", value: 'Styling & design' },
{ title: 'Give people a reason to connect.', label: 'YOUR BRAND, BROUGHT TO LIFE', image: 'clear-corporate-portrait.webp', alt: 'A polished corporate event concept with round tables and a presentation stage', description: 'From a team celebration to a launch or business gathering, create a setting that makes conversation easy and your purpose clear.', cta: "Let's talk corporate", value: 'Corporate occasions' },
{ title: 'Make a little more of the moment.', label: 'MILESTONES, BIG AND SMALL', image: 'clear-celebration-garden.webp', alt: 'Garden celebration with pastel flowers and woven lights', description: 'Birthdays, engagements, anniversaries and all those lovely reasons to get everyone together. Personal occasions, thoughtfully considered.', cta: "Let's talk celebrations", value: 'Private celebrations' },
{ title: 'Be present for the good part.', label: 'A CALM PAIR OF HANDS', image: 'clear-coordinator-portrait.webp', alt: 'Coordinator arranging final details at an event', description: 'Support with the running order, finishing touches and moving pieces on the day, so you can spend your time with the people who matter.', cta: "Let's talk coordination", value: 'On-the-day coordination' },
{ title: 'Your ideas. A clearer direction.', label: 'A LOVELY PLACE TO START', image: 'clear-planner-portrait.webp', alt: 'A planner and client discussing a design moodboard', description: 'Bring your questions, saved pictures and half-formed ideas. We will help you find the priorities and a practical way to move forward.', cta: "Let's talk ideas", value: 'Creative consultations' }
];
const imageAssets = {"clear-wedding-portrait.webp":{"src":"assets/images/clear-wedding-portrait.webp","srcset":"assets/images/clear-wedding-portrait-640.webp 640w, assets/images/clear-wedding-portrait.webp 1024w","width":1024,"height":1536},"clear-styling-tablescape.webp":{"src":"assets/images/clear-styling-tablescape.webp","srcset":"assets/images/clear-styling-tablescape-640.webp 640w, assets/images/clear-styling-tablescape.webp 1536w","width":1536,"height":1024},"clear-corporate-portrait.webp":{"src":"assets/images/clear-corporate-portrait.webp","srcset":"assets/images/clear-corporate-portrait-640.webp 640w, assets/images/clear-corporate-portrait.webp 1024w","width":1024,"height":1536},"clear-planner-portrait.webp":{"src":"assets/images/clear-planner-portrait.webp","srcset":"assets/images/clear-planner-portrait-640.webp 640w, assets/images/clear-planner-portrait.webp 1024w","width":1024,"height":1536},"clear-coordinator-portrait.webp":{"src":"assets/images/clear-coordinator-portrait.webp","srcset":"assets/images/clear-coordinator-portrait-640.webp 640w, assets/images/clear-coordinator-portrait.webp 1024w","width":1024,"height":1536},"clear-celebration-garden.webp":{"src":"assets/images/clear-celebration-garden.webp","srcset":"assets/images/clear-celebration-garden-640.webp 640w, assets/images/clear-celebration-garden.webp 1536w","width":1536,"height":1024},"clear-setting-detail.webp":{"src":"assets/images/clear-setting-detail.webp","srcset":"assets/images/clear-setting-detail-640.webp 640w, assets/images/clear-setting-detail.webp 1024w","width":1024,"height":1536},"editorial-hero.webp":{"src":"assets/images/editorial-hero.webp","srcset":"assets/images/editorial-hero-640.webp 640w, assets/images/editorial-hero.webp 1024w","width":1024,"height":1536},"editorial-social.webp":{"src":"assets/images/editorial-social.webp","srcset":"assets/images/editorial-social-640.webp 640w, assets/images/editorial-social.webp 1536w","width":1536,"height":1024},"editorial-studio.webp":{"src":"assets/images/editorial-studio.webp","srcset":"assets/images/editorial-studio-640.webp 640w, assets/images/editorial-studio.webp 1024w","width":1024,"height":1536},"gallery-ceremony.webp":{"src":"assets/images/gallery-ceremony.webp","srcset":"assets/images/gallery-ceremony-640.webp 640w, assets/images/gallery-ceremony.webp 1536w","width":1536,"height":1024},"gallery-birthday.webp":{"src":"assets/images/gallery-birthday.webp","srcset":"assets/images/gallery-birthday-640.webp 640w, assets/images/gallery-birthday.webp 1536w","width":1536,"height":1024},"gallery-couple.webp":{"src":"assets/images/gallery-couple.webp","srcset":"assets/images/gallery-couple-640.webp 640w, assets/images/gallery-couple.webp 1024w","width":1024,"height":1536},"gallery-launch.webp":{"src":"assets/images/gallery-launch.webp","srcset":"assets/images/gallery-launch-640.webp 640w, assets/images/gallery-launch.webp 1536w","width":1536,"height":1024},"gallery-tablescape.webp":{"src":"assets/images/gallery-tablescape.webp","srcset":"assets/images/gallery-tablescape-640.webp 640w, assets/images/gallery-tablescape.webp 1536w","width":1536,"height":1024},"gallery-hinterland.webp":{"src":"assets/images/gallery-hinterland.webp","srcset":"assets/images/gallery-hinterland-640.webp 640w, assets/images/gallery-hinterland.webp 1536w","width":1536,"height":1024}};
if(window.EVENT_STUDIO_IMAGES){for(const asset of Object.values(imageAssets)){asset.src=window.EVENT_STUDIO_IMAGES[asset.src] || asset.src;}}
function source(name) { return imageAssets[name].src; }
$$('.service-tab').forEach(tab => tab.addEventListener('click', () => {
 const service = services[Number(tab.dataset.service)];
 $$('.service-tab').forEach(btn => { const active = btn === tab; btn.classList.toggle('active', active); btn.setAttribute('aria-pressed', String(active)); });
 const asset = imageAssets[service.image]; const image = $('#serviceImage');
 image.removeAttribute('srcset'); image.src = asset.src; image.alt = service.alt;
 image.width = asset.width; image.height = asset.height;
 if (!window.EVENT_STUDIO_STANDALONE) { image.srcset = asset.srcset; image.sizes = '(max-width:680px) 294px, 440px'; }
 $('.service-feature').classList.toggle('is-landscape', asset.width > asset.height);
 $('#serviceLabel').textContent = service.label; $('#serviceTitle').textContent = service.title; $('#serviceDescription').textContent = service.description;
 $('#serviceEnquire').replaceChildren(document.createTextNode(service.cta + ' '), Object.assign(document.createElement('span'), {textContent: '↗'}));
 $('#serviceEnquire').dataset.enquireService = service.value;
}));
$('#serviceEnquire').addEventListener('click', e => { $('#service').value = e.currentTarget.dataset.enquireService; });
const galleryItems = $$('.gallery-item');
let visibleItems = [...galleryItems];
$$('.filter').forEach(btn => btn.addEventListener('click', () => {
 $$('.filter').forEach(b => { const selected = b === btn; b.classList.toggle('active', selected); b.setAttribute('aria-pressed', String(selected)); });
 const filter = btn.dataset.filter;
 galleryItems.forEach(item => { item.hidden = filter !== 'all' && item.dataset.category !== filter; });
 visibleItems = galleryItems.filter(item => !item.hidden);
 $('#galleryGrid').classList.toggle('filtered', filter !== 'all');
}));
// The initial wedding image is portrait; service changes adjust the presentation.
$('.service-feature').classList.remove('is-landscape');
const lightbox = $('#lightbox'); let currentImage = 0; let imageTrigger = null;
function displayImage() {
 const item = visibleItems[currentImage];
 const asset = imageAssets[item.dataset.image]; const image = $('#lightboxImage');
 image.onload = () => { const density = Math.max(1, window.devicePixelRatio || 1); image.style.maxWidth = `min(100%, ${Math.floor(image.naturalWidth / density)}px)`; image.style.maxHeight = `min(calc(100% - 45px), ${Math.floor(image.naturalHeight / density)}px)`; };
 image.src = asset.src; image.alt = $('img', item).alt;
 $('#lightboxTitle').textContent = item.dataset.title; $('#lightboxCount').textContent = `${currentImage + 1} / ${visibleItems.length}`;
 $('#prevImage').hidden = $('#nextImage').hidden = visibleItems.length < 2;
}
galleryItems.forEach(item => item.addEventListener('click', () => { imageTrigger = item; currentImage = visibleItems.indexOf(item); displayImage(); lightbox.showModal(); document.body.classList.add('locked'); $('#closeLightbox').focus(); }));
$('#closeLightbox').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', e => { if (e.target === $('.lightbox-inner')) lightbox.close(); });
lightbox.addEventListener('close', () => { document.body.classList.remove('locked'); imageTrigger?.focus(); });
function moveImage(direction) { currentImage = (currentImage + direction + visibleItems.length) % visibleItems.length; displayImage(); }
$('#prevImage').addEventListener('click', () => moveImage(-1)); $('#nextImage').addEventListener('click', () => moveImage(1));
lightbox.addEventListener('keydown', e => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); moveImage(e.key === 'ArrowLeft' ? -1 : 1); } });
const form = $('#eventForm'); const first = $('#stepOne'); const second = $('#stepTwo');
function showStep(step) {
 first.hidden = step !== 1; first.disabled = step !== 1; second.hidden = step !== 2; second.disabled = step !== 2;
 $('#stepLabel').textContent = `0${step} / 02`; $('#formProgress').style.width = step === 1 ? '50%' : '100%'; $('#formError').textContent = '';
}
$('#nextStep').addEventListener('click', () => { if (!$('#service').reportValidity()) return; showStep(2); $('#name').focus({preventScroll:true}); });
$('#previousStep').addEventListener('click', () => { showStep(1); $('#service').focus({preventScroll:true}); });
let enquiryText = '';
const connected = !!form.dataset.endpoint.trim();
if (connected) { $('#submitEnquiry').firstChild.textContent = 'Send enquiry '; $('.consent span').textContent = 'I agree to be contacted about this enquiry.'; }
form.addEventListener('submit', async e => {
 e.preventDefault(); if (!first.hidden) { $('#nextStep').click(); return; } if (!form.reportValidity()) return; if ($('#website').value) return;
 const submit = $('#submitEnquiry'); submit.disabled = true; const error = $('#formError'); error.textContent = '';
 // Temporarily enable both fieldsets so FormData includes all occasion details.
 first.disabled = false; const data = new FormData(form); first.disabled = true;
 const rows = [['Occasion', data.get('service')], ['Date', data.get('event_date') || 'Still deciding'], ['Guests', data.get('guests') || 'Still deciding'], ['Location', data.get('location') || 'Still deciding'], ['Budget', data.get('budget') || 'To discuss'], ['Name', data.get('name')], ['Email', data.get('email')], ['Phone', data.get('phone') || 'Not provided'], ['Ideas', data.get('message')]];
 enquiryText = 'THE EVENT STUDIO — ENQUIRY\n\n' + rows.map(([label,value]) => `${label}: ${value}`).join('\n\n');
 try {
  if (connected) {
   const endpoint = new URL(form.dataset.endpoint, window.location.href);
   if (!['http:', 'https:'].includes(endpoint.protocol)) throw new Error('Invalid form endpoint');
   const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 20000);
   let response; try { response = await fetch(endpoint, {method:'POST',body:data,signal:controller.signal}); } finally { clearTimeout(timeout); }
   if (!response.ok) throw new Error('Delivery failed');
   $('#completeTitle').textContent = 'Thank you for saying hello.'; $('#completeMessage').textContent = 'Your enquiry has been submitted successfully.';
  }
  second.hidden = true; second.disabled = true; $('#formComplete').hidden = false; $('#stepLabel').textContent = connected ? 'SENT' : 'PREVIEW';
  $('#enquirySummary').replaceChildren();
  rows.slice(0,7).forEach(([label,value]) => { const dt = document.createElement('dt'); dt.textContent = label; const dd = document.createElement('dd'); dd.textContent = value; $('#enquirySummary').append(dt,dd); });
  $('#formComplete').focus({preventScroll:true});
 } catch { error.textContent = 'Your enquiry could not be sent. Please try again. Your details are still here.'; }
 finally { submit.disabled = false; }
});
$('#downloadEnquiry').addEventListener('click', () => { const blob = new Blob([enquiryText], {type:'text/plain;charset=utf-8'}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'my-event-enquiry.txt'; a.click(); setTimeout(() => URL.revokeObjectURL(url),1000); });
$('#startAgain').addEventListener('click', () => { form.reset(); $('#formComplete').hidden = true; showStep(1); $('#service').focus({preventScroll:true}); });
if ('IntersectionObserver' in window) { const sticky = $('.mobile-enquire'); const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.target.id === 'enquire') sticky.classList.toggle('is-hidden', entry.isIntersecting); }); }, {threshold:0}); observer.observe($('#enquire')); }
