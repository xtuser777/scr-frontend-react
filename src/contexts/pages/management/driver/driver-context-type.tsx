export default interface DriverContextType {
  clearFields: () => void;
  persistData: () => Promise<void>;
}
