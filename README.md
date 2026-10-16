# The Event Studio — Poppins & Unique Photography

A responsive static HTML/CSS/JavaScript event-planning website concept for 4Business Group. This revision uses self-hosted Poppins typography, nine newly generated photos, a studio portrait, editorial hero collage, service explorer, varied gallery, a graphic celebration panel, location cards and an enquiry note.

## Open the website

Extract the ZIP and open `event-studio/index.html`. Keep the assets folder alongside it. To host the website, upload that folder's contents to the document root. No installation, build tools, online images or externally loaded fonts are required.

## Edit the files

- `index.html`: section content, navigation and form.
- `assets/css/studio.css`: Poppins typography, colours and responsive layouts.
- `assets/js/studio.js`: services, gallery, menu and form interactions.
- `assets/images/`: 16 different photographic masters and their 640px responsive variants.
- `assets/fonts/`: Poppins Regular, Medium, SemiBold and OFL licence.
- `assets/icons/favicon.svg`: site icon.
- `ASSET-NOTES.md`: photo roles, exact dimensions and new generation prompts.

## No repeated photography across sections

Every photo role uses a different source. The hero contains two new photos and the studio section a third. Each of the six services has its own photo, and none of those appears in the gallery. Seven gallery images are unique. The location and enquiry sections use their own designed layouts rather than repeating photos. The image modal opens the gallery image selected by the visitor.

Photo masters retain their native pixels and are encoded losslessly. Responsive 640px variants are downsampled and encoded losslessly. No photograph is enlarged or cropped to fill an unrelated shape. Larger displays keep bounded photo widths; the modal viewer respects native resolution and screen density.

## Included interactions

Six switchable services, category filters, image viewer with keyboard navigation, mobile menu, FAQ accordions and a two-step enquiry preview with a downloadable text file. Reduced-motion preferences are respected.

## Enquiry delivery

The form defaults to preview mode and sends nothing. It does not store personal details in browser storage. Set `data-endpoint` on `#eventForm` only after configuring your own verified HTTP(S) POST endpoint accepting multipart/form-data. Configure notifications, server validation, spam protection and approved privacy wording, and test real delivery. Success appears only after an HTTP 2xx response.

## Before commercial use

The Event Studio is placeholder branding. All photographs are illustrative generated concepts rather than actual completed client work. Confirm services, locations, business details and permissions with the client. No testimonials or awards have been invented. Search indexing stays disabled.

## Verification

Checked repeated photo placements, service/gallery source separation, unique image pixel hashes, native master pixel equality, responsive image dimensions, local file references, Poppins font metadata, JavaScript syntax, internal links and ZIP integrity. Browser visual rendering and interaction testing were unavailable in this environment and remain outstanding.
