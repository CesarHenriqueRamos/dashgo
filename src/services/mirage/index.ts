import { ActiveModelSerializer, Factory, Model, createServer } from 'miragejs';
import { faker } from '@faker-js/faker'

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        serializers: {
            application: ActiveModelSerializer// permitir fazer cadastro de user e relacionamentos
        },
        models: {
            user: Model.extend<Partial<User>>({})
        },
        factories:{
            user:Factory.extend({
                name(i){
                    return `User ${i + 1}`
                },
                email(){
                    return faker.internet.email().toLowerCase();
                },
                createdAt(){
                    return faker.date.recent({ days: 10 })
                }
            })
        },
        seeds(server){
            server.createList('user',10);
        },
        routes() {
            this.namespace = 'api';
            this.timing = 750;

            this.get('/users');
            this.post('/users');

            this.namespace = '';
            this.passthrough();
        }
    });
    return server;
}