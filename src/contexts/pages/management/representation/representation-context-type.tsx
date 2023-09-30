export default interface RepresentationContextType {
  clearFields: () => void;
  persistData: () => Promise<void>;
}
