import { InMemoryDbService, RequestInfo  } from 'angular-in-memory-web-api';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

export class InMemTaskService implements InMemoryDbService {
  generateRandomId(): number {
    return Math.floor(Math.random() * 10000);
  }

  createDb() {
    let tasks = [
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'alta', project: '1', status: 'doing', responsible: 'alguém', deadline: '01/01/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'alta', project: '1', status: 'doing', responsible: 'alguém', deadline: '01/01/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'alta', project: '1', status: 'doing', responsible: 'alguém', deadline: '01/01/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'alta', project: '1', status: 'doing', responsible: 'alguém', deadline: '01/01/2024' },
    { id: this.generateRandomId(), name: 'dhusmasda', details: 'aaa', priority: 'baixo', project: '2', status: 'done', responsible: 'alguém2', deadline: '15/02/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'médio', project: '1', status: 'to do', responsible: 'alguém3', deadline: '23/03/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'médio', project: '1', status: 'to do', responsible: 'alguém3', deadline: '23/03/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'médio', project: '1', status: 'to do', responsible: 'alguém3', deadline: '23/03/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'médio', project: '1', status: 'to do', responsible: 'alguém3', deadline: '23/03/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'médio', project: '1', status: 'to do', responsible: 'alguém3', deadline: '23/03/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'médio', project: '1', status: 'to do', responsible: 'alguém3', deadline: '23/03/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'médio', project: '1', status: 'to do', responsible: 'alguém3', deadline: '23/03/2024' },
    { id: this.generateRandomId(), name: 'asdad', details: 'aaaa', priority: 'alta', project: '2', status: 'done', responsible: 'alguém', deadline: '04/04/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'alta', project: '1', status: 'doing', responsible: 'alguém', deadline: '10/05/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'alta', project: '1', status: 'doing', responsible: 'alguém', deadline: '10/05/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'alta', project: '1', status: 'doing', responsible: 'alguém', deadline: '10/05/2024' },
    { id: this.generateRandomId(), name: 'dhusmasda', details: 'aaa', priority: 'baixo', project: '2', status: 'done', responsible: 'alguém2', deadline: '22/06/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'médio', project: '1', status: 'to do', responsible: 'alguém3', deadline: '13/07/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'médio', project: '1', status: 'to do', responsible: 'alguém3', deadline: '13/07/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'médio', project: '1', status: 'to do', responsible: 'alguém3', deadline: '13/07/2024' },
    { id: this.generateRandomId(), name: 'Windstorm', details: 'aaa', priority: 'médio', project: '1', status: 'to do', responsible: 'alguém3', deadline: '13/07/2024' }
];
    return { tasks };
  }
}