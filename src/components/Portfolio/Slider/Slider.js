import React, {useState} from 'react';
import { Swipe } from 'react-swipe-component';
import Aos from 'aos';
import './Slider.scss';
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [active, setActive] = useState(true);
    Aos.init({duration: 1500});
    const slides = [
        {
        id: 1,
        src_img: 'https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        slide_name: 'Slide name 1',
        letters_1st_line: 'J S M K ',
        letters_2nd_line: ' U T I E',
        project_title: 'Project Title',
        project_subtitle: 'Project Subtitle',
        project_date: '',
        project_descriprion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt est quam, at posuere diam consectetur a. Cras ac nibh rhoncus, facilisis lacus ac, pellentesque metus. Curabitur interdum gravida sem nec molestie. Fusce id condimentum ex. Nullam rhoncus mollis libero id pellentesque. Quisque molestie, erat vitae efficitur imperdiet, dolor metus facilisis ipsum, vel molestie felis ante at leo. Praesent a fermentum purus. Nulla sed ante quis libero rhoncus porttitor eu id eros. Integer rutrum, purus non imperdiet pulvinar, metus mauris posuere leo, non gravida ipsum enim eget leo. Vivamus egestas venenatis efficitur. Nulla felis magna, hendrerit vel justo eget, vestibulum bibendum enim. Integer eu nisi sed velit mollis suscipit vitae nec tortor. Curabitur lacinia augue cursus, molestie magna quis, porta orci. Nam finibus, turpis nec pellentesque faucibus, sapien risus pellentesque dolor, sit amet mattis orci erat sit amet diam. Maecenas sed dui et urna aliquam aliquet quis non lorem. Sed porta vulputate dolor, sed accumsan risus egestas in. Cras congue commodo enim, laoreet maximus lectus hendrerit eu. Maecenas vestibulum gravida eros nec porttitor. Nam et ante eros. Ut et pellentesque elit.',
        },
        {
        id: 2,
        src_img: 'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        slide_name: 'Slide name 2',
        letters_1st_line: 'R S A R N ',
        letters_2nd_line: ' E T U A T',
        project_title: 'Project Title',
        project_subtitle: 'Project Subtitle',
        project_date: '',
        project_descriprion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt est quam, at posuere diam consectetur a. Cras ac nibh rhoncus, facilisis lacus ac, pellentesque metus. Curabitur interdum gravida sem nec molestie. Fusce id condimentum ex. Nullam rhoncus mollis libero id pellentesque. Quisque molestie, erat vitae efficitur imperdiet, dolor metus facilisis ipsum, vel molestie felis ante at leo. Praesent a fermentum purus. Nulla sed ante quis libero rhoncus porttitor eu id eros. Integer rutrum, purus non imperdiet pulvinar, metus mauris posuere leo, non gravida ipsum enim eget leo. Vivamus egestas venenatis efficitur. Nulla felis magna, hendrerit vel justo eget, vestibulum bibendum enim. Integer eu nisi sed velit mollis suscipit vitae nec tortor. Curabitur lacinia augue cursus, molestie magna quis, porta orci. Nam finibus, turpis nec pellentesque faucibus, sapien risus pellentesque dolor, sit amet mattis orci erat sit amet diam. Maecenas sed dui et urna aliquam aliquet quis non lorem. Sed porta vulputate dolor, sed accumsan risus egestas in. Cras congue commodo enim, laoreet maximus lectus hendrerit eu. Maecenas vestibulum gravida eros nec porttitor. Nam et ante eros. Ut et pellentesque elit.',
        },
        {
        id: 3,
        src_img: 'https://images.pexels.com/photos/7618308/pexels-photo-7618308.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        slide_name: 'Slide name 3',
        letters_1st_line: 'F R I U E ',
        letters_2nd_line: ' U N T R ',
        project_title: 'Project Title',
        project_subtitle: 'Project Subtitle',
        project_date: '',
        project_descriprion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt est quam, at posuere diam consectetur a. Cras ac nibh rhoncus, facilisis lacus ac, pellentesque metus. Curabitur interdum gravida sem nec molestie. Fusce id condimentum ex. Nullam rhoncus mollis libero id pellentesque. Quisque molestie, erat vitae efficitur imperdiet, dolor metus facilisis ipsum, vel molestie felis ante at leo. Praesent a fermentum purus. Nulla sed ante quis libero rhoncus porttitor eu id eros. Integer rutrum, purus non imperdiet pulvinar, metus mauris posuere leo, non gravida ipsum enim eget leo. Vivamus egestas venenatis efficitur. Nulla felis magna, hendrerit vel justo eget, vestibulum bibendum enim. Integer eu nisi sed velit mollis suscipit vitae nec tortor. Curabitur lacinia augue cursus, molestie magna quis, porta orci. Nam finibus, turpis nec pellentesque faucibus, sapien risus pellentesque dolor, sit amet mattis orci erat sit amet diam. Maecenas sed dui et urna aliquam aliquet quis non lorem. Sed porta vulputate dolor, sed accumsan risus egestas in. Cras congue commodo enim, laoreet maximus lectus hendrerit eu. Maecenas vestibulum gravida eros nec porttitor. Nam et ante eros. Ut et pellentesque elit.',
        },
    ];
    console.log(active)
    const dots = [];
    for (let i = 0; i < slides.length; i++) {
      dots.push(
        <li key={i}>
            
          <div
            onClick={() => setCurrentSlide(i)}
            className={i === currentSlide && 'active'}
          >
              {i+1}/{slides.length}
          </div>
          
        </li>
      );
    }
    const slideNext = () => {
          setCurrentSlide((prev) => {
            return prev + 1 === slides.length ? 0 : currentSlide + 1;
          });
    };
    const slidePrev = () => {
        setCurrentSlide((prev) => {
            return prev === 0 ? (slides.length - 1) : currentSlide - 1;
        });
    };
    return(
        <section className='slider_component'>
            <ul>{dots}</ul>
            <div className='slider'>
                <div className='slider_content'>
                    <Swipe
                    nodeName='div'
                    detectTouch='true'
                    detectMouse='true'
                    onSwipedLeft={slideNext}
                    onSwipedRight={slidePrev}
                    >
                        {slides.map(item => (
                            <div key={item.id} className={(item.id-1 === currentSlide) ? 'slide active' : 'slide'}>
                                <img className='main_img' src={item.src_img} alt={item.slide_name}/>
                                <div className='show_more_arrow' onClick={() => setActive(!active)}>read more about {item.slide_name} (CLICK!) </div>
                                <div className={active ? 'letters first_letters': 'letters first_letters_active'}>{item.letters_1st_line}</div>
                                <div className={active ? 'letters second_letters': 'letters second_letters_active'}>{item.letters_2nd_line}</div>

                                <div className={active ? 'modal_disactive': 'modal_active'}>
                                    <div className='modal_left_content'>
                                        <div className='number_background'>{item.id}</div>
                                        <h2 className='project_title'>{item.project_title}</h2>
                                        <h5 className='project_subtitle'>{item.project_subtitle}</h5>
                                        <div className='project_description'>
                                            {item.project_descriprion}
                                        </div>
                                    </div>
                                    <div className='modal_right_content'>
                                        <div className='close_modal' onClick={() => setActive(!active)}>X</div>
                                        <img src={item.src_img} alt={item.slide_name}/>
                                        <img src={item.src_img} alt={item.slide_name}/>
                                        <img src={item.src_img} alt={item.slide_name}/>
                                        <img src={item.src_img} alt={item.slide_name}/>
                                        <img src={item.src_img} alt={item.slide_name}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Swipe>
                </div>
                
                <div className='slider_btn next' onClick={()=> slideNext()}>&#62;</div>
                <div className='slider_btn prev' onClick={()=> slidePrev()}>&#60;</div> 
            </div>
        </section>
    );
};

export default Slider;