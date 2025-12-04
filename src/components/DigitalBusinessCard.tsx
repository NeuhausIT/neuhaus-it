import { Download, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import vcardQrCode from "@/assets/vcard-qr-code.svg";

const DigitalBusinessCard = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/vCard_Neuhaus-IT.vcf";
    link.download = "vCard_Neuhaus-IT.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-card border border-border rounded-2xl p-8 shadow-lg">
          {/* QR Code */}
          <div className="flex-shrink-0">
            <img
              src={vcardQrCode}
              alt="vCard QR-Code Neuhaus-IT"
              className="w-48 h-48 rounded-xl bg-white p-2"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Digitale Visitenkarte</h2>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Scannen Sie den QR-Code mit Ihrem Smartphone, um meine Kontaktdaten direkt zu speichern – oder laden Sie die vCard herunter.
            </p>

            <Button 
              variant="action" 
              onClick={handleDownload}
              className="gap-2"
            >
              <Download className="w-5 h-5" />
              vCard herunterladen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalBusinessCard;
