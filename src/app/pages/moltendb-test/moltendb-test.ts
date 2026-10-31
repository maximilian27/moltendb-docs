import {Component} from '@angular/core';
import {moltenDbResource, moltendbClient} from '@moltendb-web/angular';

interface Greeting {
  _key: string;
  message: string;
  createdAt: number;
}

@Component({
  selector: 'app-moltendb-test',
  imports: [],
  templateUrl: './moltendb-test.html',
  styleUrl: './moltendb-test.scss',
})
export class MoltendbTest {
  private readonly client = moltendbClient();

  protected readonly greetings = moltenDbResource<Greeting[]>('greetings', (col) =>
          col.get().sort([{field: 'createdAt', order: 'desc'}]).exec() as unknown as Promise<Greeting[]>,
      {initialValue: []}
  );

  protected async addGreeting() {
    const key = `greeting_${Date.now()}`;
    await this.client
        .collection('greetings')
        .set({[key]: {message: 'Hello from MoltenDB!', createdAt: Date.now()}})
        .exec();
  }

  protected async removeGreeting(key: string) {
    await this.client.collection('greetings').delete().keys(key).exec();
  }
}
