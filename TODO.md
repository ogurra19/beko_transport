# TODO: Fix "Kërko Ofertë" Button Functionality

## Tasks
- [x] Add event listeners to "Kërko Ofertë" buttons in script.js to scroll to contact section
- [x] Test the buttons to ensure smooth scrolling works

## Information Gathered
- Two "Kërko Ofertë" buttons exist: one in navigation (.cta-button) and one in hero section (.btn-primary)
- No event listeners currently attached to these buttons
- Contact section has id="contact" for scrolling target

## Plan
- Add JavaScript functionality to make buttons scroll smoothly to the contact form section when clicked
- This allows users to request quotes by filling out the contact form

## Dependent Files
- script.js: Add event listeners for quote buttons

---

# TODO: Make Phone Icon Clickable to Call

## Tasks
- [x] Make the 📞 icon in contact section clickable to initiate a call
- [x] Test the icon click functionality

## Information Gathered
- Phone icon (📞) is currently a static emoji in the contact info section
- WhatsApp icon is clickable and opens WhatsApp
- Phone numbers have tel: links, but the main icon is not clickable
- Main phone number is +35541234567

## Plan
- Wrap the 📞 icon in an anchor tag with href="tel:+35541234567" to make it clickable for calling
- This provides similar functionality to the WhatsApp icon

## Dependent Files
- index.html: Edit the contact section to make the phone icon a clickable link
