import IndependentPower from '../../assets/Img/independent-power.webp'
import industrialPark from '../../assets/Img/industrial-park.webp'
import selfSustainable from '../../assets/Img/self-sustainable.webp'

const stages = [
    {
        id: 1,
        image: IndependentPower,
        title: 'Independent Power <br/>Producer',
        phara: 'Development of a 40MW Solar Power Park in Kancheepuram, reducing carbon emissions by approximately 56,000 metric tons annually.'
    },
    {
        id: 2,
        image: industrialPark,
        title: 'Industrial Park',
        phara: 'Cost-Effective, Net-Zero Ready Plug-and-Play Industrial Parks powered by Solar Energy and Battery Energy Storage Systems (BESS), tailored for industries dedicated to achieving RE100 goals and advancing sustainability.'
    },
    {
        id: 3,
        image: selfSustainable,
        title: 'Self Sustainable <br/>Communities',
        phara: 'Creation of Self-Sustaining Communities built using GFRG technology, offering 500,000 sq. ft of residential & community spaces and enabling over 5,000 workers to walk to work.'
    }
];

export default function Stages() {
    return (
        <section className="py-24 px-3.5">
            <div className="2xl:max-w-[1440px] 3xl:max-w-[1540px] 4xl:max-w-[1720px] mx-auto">
                <h2 className="text-5xl text-primary text-center">Stages</h2>

                <div className="flex mt-10">
                    {stages.map((item, index) => (
                        <div key={item.id} className={`flex ${index % 2 == 0 ? 'flex-col' : 'flex-col-reverse'}`}>
                            <div className={`border-dashed h-[400px] ${index % 2 == 0 ? 'border-b-2' : 'border-t-2'}`}>
                                <img src={item.image} alt="" className='rounded-xl w-[380px] h-[240px] object-fill mx-auto my-12' />
                            </div>

                            <div className="flex flex-col justify-center text-center py-12 px-4 text-center h-[400px]">
                                <h3 className='font-bold text-3xl mb-4' dangerouslySetInnerHTML={{ __html: item.title }} />
                                <p className='text-xl mx-4'>{item.phara}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section >
    );
}