# Tiger Force site design

Checkpoint before the rebuild of tigerforcegroup.com. If the build goes wrong, return to this commit.

## Intent

A static Astro site for Tiger Force Group in the language of the client's printed brochure, with facts kept from the live site and the client's own files (deck, client list, brochure).

## Visual system

- Black `#0A0A0B` with `#151517` diagonal pinstripes, saffron `#FDB912` (sampled from the brochure), steel `#E8EDF2` pinstripe panels, white
- Display: Archivo at its narrowest width, 800, uppercase. Body: Hanken Grotesk
- One slash angle (14°) for panels, buttons, bullets and the banner bar; stripes at 120° as in the brochure
- Yellow is for slashes, buttons and the one accent word, never body text

## Signature motion

The homepage hero is the brochure cover: three slanted photo panels split by yellow slashes. On load the yellow sheet sweeps in, the panels open left to right and the headline rises line by line, about 1.6s in all. Elsewhere, content rises once on scroll and photographs open with a diagonal wipe. No counters, slideshows or looping effects. `prefers-reduced-motion` disables all of it.

## Pages

Real URLs: Home, Brief Profile, Vision, Mission, Values, Ethos, MD’s Profile, MD’s Message, ED’s Profile, Why Tiger Force, Security, Housekeeping, Manpower, Gallery, Clients, Documents, Contact.

Sector links on the live site duplicate the homepage. Hospitals, hotels, retail, and the rest are a sectors list on Home and Clients, not separate pages.

The live ED page says “Content here”. The new page keeps the slot and states that the profile is not published. No invented biography.

## Contact

The form requires a name, a phone, and a message. Submit opens an email to info@tigerforcegroup.com. If the mail app does not open, the address is shown to copy. Phones 9266972224, 01146091507, and 9811165954 stay visible, with both offices.

## Facts that must survive the rewrite

- Registered with DGR (Directorate General Resettlement, Ministry of Defence, New Delhi)
- PSARA licences for various states, ISO certifications
- Led by Col K. K. Nanda (Retd). Manpower wing headed by Mr. Aditya Nanda
- Delhi Office: K-316, Lado Sarai, New Delhi-110 030
- Head Office: C-1/2796, Sushant Lok-I, Gurgaon (Haryana)
- Email: info@tigerforcegroup.com, tigerforce007@yahoo.com
- Client and event names from the live pages stay accurate

## Check

`astro build` succeeds. Home, Security, Gallery, Contact, and the ED page are reviewed in the browser, including the mobile menu, keyboard focus, and reduced motion.
