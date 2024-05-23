import React from 'react';
import "./Peru.css";
import signImage from "../peru/elementarySchool/VDCschoolsign.jpg"


function IrrigationReservoir() {
    return (
        <div>
            <div className='IR-header'>
                <div>
                    <h1>Irrigation Reservoir</h1>
                </div>
                <div>
                    <h2>2018-2022</h2>
                </div>
            </div>
            <div className= 'buttons'>
                <button className = "peruHomeButton">  Peru Home  </button>
                <button className = "peruHomeButton"> Other Project </button>
            </div>
            <div className = "body_text">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus, eros ac aliquet rutrum, nibh mi ullamcorper felis, vel ultricies arcu nunc convallis lectus. Nunc at molestie turpis, vitae porttitor justo. Nam maximus, libero a porta mollis, eros orci ullamcorper sapien, vitae commodo diam massa non magna. Donec rhoncus diam sit amet odio pulvinar, a rhoncus neque gravida. Quisque euismod ultricies maximus. Fusce ultricies porta magna, vel congue quam eleifend vitae. Nulla facilisi. Sed aliquet elementum ligula, et mattis tortor sodales in.

                    Vivamus posuere nec enim a iaculis. Donec non porta libero. Integer porta odio est, quis hendrerit mauris tincidunt sed. Morbi non dui nec erat pulvinar finibus. Maecenas viverra tincidunt sapien, vel condimentum libero tempor sed. Etiam tristique risus eget mi elementum, quis pharetra ex suscipit. Aliquam condimentum nunc a libero porttitor, congue gravida nulla iaculis. Nullam tempor ornare turpis, auctor scelerisque tellus accumsan vel. Fusce ac rutrum metus. In posuere metus sit amet ipsum sagittis tristique. Phasellus condimentum urna vel tincidunt pharetra. Morbi ultricies vulputate ante, et consequat orci porttitor id.</h3>
            </div>

            <div className = "text-w-img-div">
                <div className = "sign-image">
                    <img src= {signImage} alt="VDC school sign"/>
                </div>
                <div className = "text-next-to-img">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus, eros ac aliquet rutrum, nibh mi ullamcorper felis, vel ultricies arcu nunc convallis lectus. Nunc at molestie turpis, vitae porttitor justo. Nam maximus, libero a porta mollis, eros orci ullamcorper sapien, vitae commodo diam massa non magna. Donec rhoncus diam sit amet odio pulvinar, a rhoncus neque gravida. Quisque euismod ultricies maximus. Fusce ultricies porta magna, vel congue quam eleifend vitae. Nulla facilisi. Sed aliquet elementum ligula, et mattis tortor sodales in.

                        Vivamus posuere nec enim a iaculis. Donec non porta libero. Integer porta odio est, quis hendrerit mauris tincidunt sed. Morbi non dui nec erat pulvinar finibus. Maecenas viverra tincidunt sapien, vel condimentum libero tempor sed. Etiam tristique risus eget mi elementum, quis pharetra ex suscipit. Aliquam condimentum nunc a libero porttitor, congue gravida nulla iaculis. Nullam tempor ornare turpis, auctor scelerisque tellus accumsan vel. Fusce ac rutrum metus. In posuere metus sit amet ipsum sagittis tristique. Phasellus condimentum urna vel tincidunt pharetra. Morbi ultricies vulputate ante, et consequat orci porttitor id</h3>
                </div>
            </div>
            
        </div>

    );
}

export default IrrigationReservoir;
