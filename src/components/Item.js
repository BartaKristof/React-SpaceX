import './Item.css'

export default function Item({heading, mission, image}){
    return(
        <section className='item' style={{backgroundImage: `url(${image})` }}>
            <div className='container'>
                <h2>{mission}</h2>

                <h1>{heading}</h1>

                <button>REWATCH</button>
            </div>
        </section>
    );
}