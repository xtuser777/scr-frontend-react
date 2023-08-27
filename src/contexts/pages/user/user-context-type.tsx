import FormIndividualPersonContextType from '../../components/shared/form-individual-person/individual-person-context-type';

export default interface UserContextType {
  individualPersonContext: FormIndividualPersonContextType;
  clearFields: () => void;
  persistData: () => Promise<void>;
}
