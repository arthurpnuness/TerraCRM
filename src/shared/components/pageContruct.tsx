export default function EmConstrucao({ page }: { page: string }) {
    return (
        <div
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img src='./img/emcons.png' alt='em' width={'250rem'} />
            <h2> {page} em construção</h2>
        </div>
    );
}
