# Tiger Force site design

Checkpoint before the rebuild of tigerforcegroup.com. If the build goes wrong, return to this commit.

## Intent

A static Astro site for Tiger Force Group: night-command presentation, rewritten voice, facts kept from the live site. Photos are copied from the current site and framed in the layout.

## Visual system

- Ink `#071422`, field `#12243A`, gold `#C6A15B`, flare `#E8D5A3`, paper `#E6E0D4`, dossier `#9BB0A0`
- Display: Big Shoulders Display. Body: Source Serif 4. Facts: IBM Plex Mono
- Gold is a rule and a single word
- Long reading sits on a paper well inside the night shell

## Signature motion

On each page change the crest stays and a gold rule draws once across the top. The homepage hero is one graded photograph. Scroll reveals clip photographs once. `prefers-reduced-motion` disables the draws.

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
