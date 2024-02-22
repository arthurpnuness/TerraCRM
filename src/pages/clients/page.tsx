import FullWidthTabs from '../../shared/components/fullTabs';
import RegisterClient from './components/tabs/register.client.tab';

export default function Clients() {
    return (
        <FullWidthTabs titlePage='Clientes' tabs={['Cadastro']} tabsPanel={[<RegisterClient />]} />
    );
}
