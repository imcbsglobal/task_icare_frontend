// data.js
import {
  ShoppingCart,
  Box,
  RotateCcw,
  FileMinus,
  FileText,
  CreditCard,
  Cpu,
  Clipboard,
  File,
  BookOpen,
} from "lucide-react";

export const features = [
  { title: "Sales", desc: "Fast billing, order tracking, and invoicing tools.", icon: ShoppingCart },
  { title: "Purchase", desc: "Simplify supplier management and purchase orders.", icon: Box },
  { title: "Sales Return", desc: "Manage returns and refunds with proper tracking.", icon: RotateCcw },
  { title: "Purchase Return", desc: "Process supplier returns efficiently.", icon: FileMinus },
  { title: "Collection", desc: "Organized payment and receipt tracking.", icon: FileText },
  { title: "Payment", desc: "Handle vendor payments with multiple options.", icon: CreditCard },
  { title: "Production", desc: "Manage assembly and resource workflows.", icon: Cpu },
  { title: "Sales Order", desc: "Create and fulfill customer orders seamlessly.", icon: Clipboard },
  { title: "Quotation", desc: "Generate professional client quotations.", icon: File },
];

export const otherFeatures = [
  { title: "Mobile Access", value: "TASK Pro Integration" },
  { title: "Advanced Features", value: "GST, Barcode Support" },
  { title: "Target Market", value: "SME Businesses" },
];

