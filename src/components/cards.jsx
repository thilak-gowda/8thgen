

function Cards(props) {
    return (
        <>
            <div className="card-main my-4">

                <img src={props.image} alt="" className="card-img" />
                <p className="card-heading">

                    {props.heading}
                </p>
                <p className="card-content">
                    {props.content}
                </p>

                <div className="card-hig">
                    <p>
                        <i class="fa-solid fa-check"></i> <span>{props.list1}
                        </span>
                    </p>
                    <p>
                        <i class="fa-solid fa-check"></i><span>  {props.list2}</span>
                    </p>

                    <p>
                        <i class="fa-solid fa-check"></i><span> {props.list3}</span>
                    </p>
                    <p>
                        <i class="fa-solid fa-check"></i><span>{props.list4}</span>
                    </p>

                    <button className="card-button">

                        Enquire Now <i class="fa-solid fa-arrow-right-long crd-arro"></i>

                    </button>

                </div>

            </div>



        </>
    )
}


export default Cards;