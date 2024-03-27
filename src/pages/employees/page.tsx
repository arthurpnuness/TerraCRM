import FullWidthTabs from '../../shared/components/fullTabs';
import EmConstrucao from '../../shared/components/pageContruct';
import ListEmployees from './components/tabs/list.employees.tab';
import RegisterEmployees from './components/tabs/register.employees.tab';
export default function Employees() {
    const constru = true;
    return (
        <>
            {constru ? (
                <EmConstrucao page='funcionários' />
            ) : (
                <FullWidthTabs
                    key={2}
                    tabs={['Funcionários', 'Cadastro']}
                    tabsPanel={[<ListEmployees />, <RegisterEmployees />]}
                />
            )}
        </>
    );
}
