import Form from '../components/Form'
import '../assets/styles/Reservation.css'

function Reservation() {
    const data = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'John Doe',
            isInput: true
        },
        {
            name: 'date',
            type: 'datetime-local',
            placeholder: '',
            isInput: true
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'johndoe@gmail.com',
            isInput: true
        },
        {
            name: 'capacity',
            type: 'number',
            placeholder: '6',
            isInput: true
        }
    ]

    return (
        <section className='reservation' id='reservation'>
            <Form data={data} />
        </section>
    )
}

export default Reservation