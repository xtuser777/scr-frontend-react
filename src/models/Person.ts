import Contact from './contact';
import EnterprisePerson from './enterprise-person';
import IndividualPerson from './individual-person';

class Person {
  constructor(
    public id: number = 0,
    public type: number = 0,
    public individual?: IndividualPerson,
    public enterprise?: EnterprisePerson,
    public contact?: Contact,
  ) {}
}

export default Person;
