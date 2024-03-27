import FullWidthTabs from '../../shared/components/fullTabs';
import ListClients from './components/tabs/list.clients.tab';
import RegisterClient from './components/tabs/register.client.tab';

export default function Clients() {
    return (
        <FullWidthTabs
            key={1}
            tabs={['Clientes', 'Cadastro']}
            tabsPanel={[<ListClients />, <RegisterClient />]}
        />
    );
}
