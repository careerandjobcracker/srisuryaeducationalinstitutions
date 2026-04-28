import { MapPin, Mail } from "lucide-react";

export const PHONE_DISPLAY = "+91 8297881777";
export const PHONE_WA = "918297881777";
export const ADDRESS_TEXT =
  "5-1-57, 1st Ward, Sriharipeta, Near APSRTC Bus Complex, Narsapuram - 534275, W.G.Dt, AP";
export const EMAIL = "srisuryacollegensp@gmail.com";

export const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${PHONE_WA}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const mapsDirectionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS_TEXT)}`;

export const gmailComposeUrl = (subject = "", body = "") =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const yahooComposeUrl = (subject = "", body = "") =>
  `https://compose.mail.yahoo.com/?to=${encodeURIComponent(EMAIL)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const outlookComposeUrl = (subject = "", body = "") =>
  `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(EMAIL)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const openWindow = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

/** Phone number with WhatsApp icon launcher */
export const PhoneWhatsApp = ({
  className = "",
  iconClassName = "w-4 h-4",
  showLabel = true,
}: {
  className?: string;
  iconClassName?: string;
  showLabel?: boolean;
}) => (
  <span className={`inline-flex items-center gap-2 ${className}`}>
    <a href={`tel:+${PHONE_WA}`} className="hover:text-gold transition-colors">
      {showLabel ? PHONE_DISPLAY : null}
    </a>
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="inline-flex items-center justify-center text-[#25D366] hover:opacity-80 transition-opacity"
    >
      <WhatsAppIcon className={iconClassName} />
    </a>
  </span>
);

/** Address with Google Maps directions link */
export const AddressMaps = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-start gap-2 ${className}`}>
    <span className="break-words">{ADDRESS_TEXT}</span>
    <a
      href={mapsDirectionsUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get directions on Google Maps"
      title="Get directions"
      className="inline-flex items-center text-gold hover:opacity-80 transition-opacity shrink-0"
    >
      <MapPin className="w-4 h-4" />
    </a>
  </span>
);

/** Email with provider chooser (Gmail/Yahoo/Outlook) */
export const EmailProviders = ({
  className = "",
  subject = "Inquiry - Sri Surya Educational Institutions",
  body = "",
}: {
  className?: string;
  subject?: string;
  body?: string;
}) => (
  <span className={`inline-flex flex-wrap items-center gap-2 ${className}`}>
    <a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors break-all">
      {EMAIL}
    </a>
    <span className="inline-flex items-center gap-1.5">
      <button
        type="button"
        onClick={() => openWindow(gmailComposeUrl(subject, body))}
        title="Open in Gmail"
        aria-label="Open in Gmail"
        className="inline-flex items-center justify-center w-6 h-6 rounded hover:bg-white/10 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
          <path fill="#EA4335" d="M12 13.065L1.5 5.25v12.75A1.5 1.5 0 003 19.5h3.75V11.25L12 15l5.25-3.75V19.5H21a1.5 1.5 0 001.5-1.5V5.25L12 13.065z" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => openWindow(yahooComposeUrl(subject, body))}
        title="Open in Yahoo Mail"
        aria-label="Open in Yahoo Mail"
        className="inline-flex items-center justify-center w-6 h-6 rounded hover:bg-white/10 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
          <path fill="#6001D2" d="M3 5h4.2l2.8 5.4L12.9 5H17l-5.5 9.7V19H8.6v-4.3L3 5zm14.5 6.7c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6zM18.7 5l-1.1 5.4h-1.4L17.5 5h1.2z" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => openWindow(outlookComposeUrl(subject, body))}
        title="Open in Outlook"
        aria-label="Open in Outlook"
        className="inline-flex items-center justify-center w-6 h-6 rounded hover:bg-white/10 transition-colors"
      >
        <Mail className="w-4 h-4" style={{ color: "#0078D4" }} />
      </button>
    </span>
  </span>
);