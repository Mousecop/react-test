import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Image from '../js/components/images';
import Gallery from '../js/components/gallery';


describe('Gallery Component', () => {
    it('Should display images', () => {
        const images = [{url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Do_i_look_funny_or_something.jpg/1280px-Do_i_look_funny_or_something.jpg',
                        description: "Angry Dog"    
        }];
        //Check className
        const renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={images}/>);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');
        
        //Check img props
        const img = result.props.children[0];
        img.props.url.should.equal(images[0].url);
        img.props.description.should.equal(images[0].description);
        result.props.children.length.should.equal(1);
        

        //Check Type
       result.type.should.equal('div');
    })
})