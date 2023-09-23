import { ChangeEvent, createContext, useEffect, useState } from 'react';
import EmployeesContextType from './employees-context-type';
import Employee from '../../../../models/employee';
import Person from '../../../../models/person';
import IndividualPerson from '../../../../models/individual-person';
import Contact from '../../../../models/contact';
import Level from '../../../../models/level';
import EmployeeService from '../../../../services/employee-service';

export const EmployeesContext = createContext<EmployeesContextType>({
  employees: [],
  filter: '',
  admission: '',
  orderBy: '',
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleAdmissionChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleOrderByChange: (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  },
  handleFilterClick: () => {
    /** */
  },
  desactivate: async (id: number) => {
    /** */
  },
  reactivate: async (id: number) => {
    /** */
  },
  remove: async (id: number) => {
    /** */
  },
});

const EmployeesProvider = (props: any) => {
  const [data, setData] = useState<Employee[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [filter, setFilter] = useState('');
  const [admission, setAdmission] = useState('');
  const [orderBy, setOrderBy] = useState('1');

  const getData = async () => {
    const service = new EmployeeService();
    const data = await service.get();
    setData(data);
    setEmployees(data);
  };

  useEffect(() => {
    getData();
  });

  const filterData = (orderBy: string) => {
    let filteredData: Employee[] = [...data];
    if (admission.length == 10) {
      filteredData = filteredData.filter((item) => item.admission.substring(0, 10) == admission);
    }

    if (filter.length > 0) {
      filteredData = filteredData.filter(
        (item) =>
          item.login.includes(filter) ||
          ((item.person as Person).individual as IndividualPerson).name.includes(filter) ||
          ((item.person as Person).contact as Contact).email.includes(filter),
      );
    }

    switch (orderBy) {
      case '1':
        filteredData = filteredData.sort((x, y) => x.id - y.id);
        break;
      case '2':
        filteredData = filteredData.sort((x, y) => y.id - x.id);
        break;
      case '3':
        filteredData = filteredData.sort((x, y) => {
          if (
            ((x.person as Person).individual as IndividualPerson).name.toUpperCase() >
            ((y.person as Person).individual as IndividualPerson).name.toUpperCase()
          )
            return 1;
          if (
            ((x.person as Person).individual as IndividualPerson).name.toUpperCase() <
            ((y.person as Person).individual as IndividualPerson).name.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
      case '4':
        filteredData = filteredData.sort((x, y) => {
          if (
            ((y.person as Person).individual as IndividualPerson).name.toUpperCase() >
            ((x.person as Person).individual as IndividualPerson).name.toUpperCase()
          )
            return 1;
          if (
            ((y.person as Person).individual as IndividualPerson).name.toUpperCase() <
            ((x.person as Person).individual as IndividualPerson).name.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
      case '5':
        filteredData = filteredData.sort((x, y) => {
          if (x.login.toUpperCase() > y.login.toUpperCase()) return 1;
          if (x.login.toUpperCase() < y.login.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '6':
        filteredData = filteredData.sort((x, y) => {
          if (y.login.toUpperCase() > x.login.toUpperCase()) return 1;
          if (y.login.toUpperCase() < x.login.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '7':
        filteredData = filteredData.sort((x, y) => (x.level as Level).id - (y.level as Level).id);
        break;
      case '8':
        filteredData = filteredData.sort((x, y) => (y.level as Level).id - (x.level as Level).id);
        break;
      case '9':
        filteredData = filteredData.sort((x, y) => {
          if (
            ((x.person as Person).individual as IndividualPerson).cpf.toUpperCase() >
            ((y.person as Person).individual as IndividualPerson).cpf.toUpperCase()
          )
            return 1;
          if (
            ((x.person as Person).individual as IndividualPerson).cpf.toUpperCase() <
            ((y.person as Person).individual as IndividualPerson).cpf.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
      case '10':
        filteredData = filteredData.sort((x, y) => {
          if (
            ((y.person as Person).individual as IndividualPerson).cpf.toUpperCase() >
            ((x.person as Person).individual as IndividualPerson).cpf.toUpperCase()
          )
            return 1;
          if (
            ((y.person as Person).individual as IndividualPerson).cpf.toUpperCase() <
            ((x.person as Person).individual as IndividualPerson).cpf.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
      case '11':
        filteredData = filteredData.sort((x, y) => {
          if (x.admission > y.admission) return 1;
          if (x.admission < y.admission) return -1;
          return 0;
        });
        break;
      case '12':
        filteredData = filteredData.sort((x, y) => {
          if (y.admission > x.admission) return 1;
          if (y.admission < x.admission) return -1;
          return 0;
        });
        break;
      case '13':
        filteredData = filteredData.sort((x, y) => x.type - y.type);
        break;
      case '14':
        filteredData = filteredData.sort((x, y) => y.type - x.type);
        break;
      case '15':
        filteredData = filteredData.sort((x, y) => {
          if (
            ((x.person as Person).contact as Contact).email.toUpperCase() >
            ((y.person as Person).contact as Contact).email.toUpperCase()
          )
            return 1;
          if (
            ((x.person as Person).contact as Contact).email.toUpperCase() <
            ((y.person as Person).contact as Contact).email.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
      case '16':
        filteredData = filteredData.sort((x, y) => {
          if (
            ((y.person as Person).contact as Contact).email.toUpperCase() >
            ((x.person as Person).contact as Contact).email.toUpperCase()
          )
            return 1;
          if (
            ((y.person as Person).contact as Contact).email.toUpperCase() <
            ((x.person as Person).contact as Contact).email.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
    }

    return filteredData;
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  const handleAdmissionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdmission(e.target.value);
  };
  const handleOrderByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value);
    setEmployees(filterData(e.target.value));
  };

  const handleFilterClick = () => {
    setEmployees(filterData(orderBy));
  };

  const isLastAdmin = (currentLevel: string) => {
    const admins = data.filter((item) => (item.level as Level).description == 'Administrador');
    if (admins.length == 1 && currentLevel == 'Administrador') return true;
    else return false;
  };

  const desactivate = async (id: number, nivel: string) => {
    const nivel_atual = nivel;

    if (isLastAdmin(nivel_atual) === true) {
      alert('Não é possível excluir o último administrador.');
    } else {
      const response = confirm('Confirma o desligamento deste funcionário?');
      if (response) {
        const user = employees.find((item) => item.id == id) as Employee;
        user.demission = new Date().toISOString().substring(0, 10);
        const service = new EmployeeService();
        if (await service.update(user)) {
          const newData = [...data];
          newData[newData.findIndex((item) => item.id == id)].demission = new Date()
            .toISOString()
            .substring(0, 10);
          const newEmployees = [...employees];
          newEmployees[newEmployees.findIndex((item) => item.id == id)].demission = new Date()
            .toISOString()
            .substring(0, 10);
          setData(newData);
          setEmployees(newEmployees);
        }
      }
    }
  };

  const reactivate = async (id: number) => {
    const response = confirm('Confirma a Reativação deste funcionário?');
    if (response) {
      const user = employees.find((item) => item.id == id) as Employee;
      user.demission = undefined;
      const service = new EmployeeService();
      if (await service.update(user)) {
        const newData = [...data];
        newData[newData.findIndex((item) => item.id == id)].demission = undefined;
        const newEmployees = [...employees];
        newEmployees[newEmployees.findIndex((item) => item.id == id)].demission = undefined;
        setData(newData);
        setEmployees(newEmployees);
      }
    }
  };

  const remove = async (id: number, nivel: string) => {
    const nivel_atual = nivel;

    if (isLastAdmin(nivel_atual) === true) {
      alert('Não é possível excluir o último administrador.');
    } else {
      const response = confirm('Confirma a exclusão deste funcionário?');
      if (response) {
        const user = employees.find((item) => item.id == id) as Employee;
        const service = new EmployeeService();
        if (await service.update(user)) {
          const newData = [...data];
          newData.splice(
            newData.findIndex((item) => item.id == id),
            1,
          );
          const newEmployees = [...employees];
          newEmployees.splice(
            newEmployees.findIndex((item) => item.id == id),
            1,
          );
          setData(newData);
          setEmployees(newEmployees);
        }
      }
    }
  };

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        filter,
        admission,
        orderBy,
        handleFilterChange,
        handleAdmissionChange,
        handleOrderByChange,
        handleFilterClick,
        desactivate,
        reactivate,
        remove,
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesProvider;
