

const PageComponent = (props) => {
    console.log(props);
    const{title,children}=props;
    return (
        <>
        <header className="bg-white shadow">
            <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
            </div>
        </header>
        <main>
           {children}
        </main>
    </>
    );
};

export default PageComponent;
