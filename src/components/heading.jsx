

function Heading(props) {
    return (

        <>

            <p className="mai-heading">
                    {props.heading1}
            </p>

        </>

    )
}

function Heading2(props) {
    return (

        <section className="heding2">

            <p className="mai-heading2">
                    {props.heading2}
            </p>

        </section>

    )
}

export { Heading, Heading2 };