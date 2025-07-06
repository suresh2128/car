import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Nav.css';
import ScrollToTopButton from './Scroll';

export default function Spares() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); 
  
  const featredpro = [
    {
      title: 'Alloy Wheel 16"',
      price: 5593,
      category: 'wheel',
      image: 'https://boodmo.com/media/cache/catalog_part/images/parts/b80244cb041c50fa71b147618bb2c7cb.webp'
    },
    {
      title: 'TurboCharger Assembly',
      price: 8308,
      image:
        'https://boodmo.com/media/cache/catalog_part/images/parts/5bccb2cdb96f553ed7b5ac0de2c22490.webp',
      price2: 13000, // Corrected MRP
    },
    {title: 'Flywheel Sub Assy',
    price: 2283,
    image: 'https://boodmo.com/media/cache/catalog_part/images/parts/85624724fdeab4a388e5b1872b14e791.webp',
    category: 'Engine'
    },
    {
      title: 'AC Compressor',
      price: 10540,
      image: 'https://boodmo.com/media/cache/catalog_part/images/parts/efd258b0f61438f032013f32a1e2e3ba.webp',
      category: 'Cooling' 
    }
  ]

  const partData = [
    {
      title: 'Engine Oil 5W-30 (3.5L)',
      price: 1979,
      category: 'Engine',
      image:
        'https://boodmo.com/media/cache/catalog_part/images/parts/f38c9a693b944f4c9e340a1138ac984e.webp',
      price2: 2604, // Corrected MRP
    },
    {
      title: 'Engine Oil Filter',
      price: 752,
      category: 'Engine',
      image:
        'https://boodmo.com/media/cache/catalog_part/images/parts/560fb8af36e0b30dc9e6291a711931fc.webp',
      price2: 985, // Corrected MRP
    },
    {
      title: 'Air Filter',
      price: 357,
      category: 'Engine',
      image:
        'https://boodmo.com/media/cache/catalog_part/images/parts/2c69f0934f18a6a6ae4f4f84c7a8f3dc.webp',
      price2: 570, // Corrected MRP
    },
    {
      title: 'Oil Filter',
      price: 752,
      category: 'Engine',
      image:
        'https://boodmo.com/media/cache/catalog_part/images/parts/79701c5db95d7bd52949b92bf7f0af7b.webp',
      price2: 970, // Corrected MRP
    },
    {
        title: 'Front Disc Brake',
        price: 1245,
        category: 'Brakes',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/06913de8a8cd68ae8e62f5456a76a879.webp',
        price2: 1618, // Corrected MRP
      },
      {
        title: 'Rear Disc Brake',
        price: 1110,
        category: 'Brakes',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/92cd941d069194acc0e8dcf879044296.webp',
        price2: 1735, // Corrected MRP
      },
      {
        title: 'Front Brake Pad Set',
        price: 650,
        category: 'Brakes',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/6296367b02dd8a203ba3b360dd1a9d00.webp',
        price2: 1424, // Corrected MRP
      },
      {
        title: 'Rear Brake Assembly',
        price: 2497,
        category: 'Brakes',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/6296367b02dd8a203ba3b360dd1a9d00.webp',
        price2: 3718, // Corrected MRP
      },
      {
        title: 'Spark plug',
        price: 589,
        category: 'Engine',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/68a02802ffff673d23615c96d095936d.webp',
        price2: 1048, // Corrected MRP
      },
      {
        title: 'Transmission RPM Sensor',
        price: 765,
        category: 'elec',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/eb9f21c.webp',
        price2: 932, // Corrected MRP
      },
      {
        title: 'Fuel Sensor',
        category: 'elec',
        price: 8377,
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/2250dd1acbec3c975b0167fc836c3d2e.webp',
        price2: 1008, // Corrected MRP
      },
      {
        title: 'Wheel Speed Sensor',
        category: 'elec',
        price: 727,
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/535faecfa192152e86c696f7fd2ba95f.webp',
        price2: 824, // Corrected MRP
      },
      {
        title: 'Front Suspension Strut Assembly Right',
        price: 1979,
        category: 'Suspension',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/6a06bf412ec2552dd796d584863e09ae.webp',
        price2: 2604, // Corrected MRP
      },
      {
        title: 'Rear Shock Absorber',
        price: 745,
        category: 'Suspension',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/c4b61383758d45eff70a9863a9ef8689.webp',
        price2: 832, // Corrected MRP
      },
      {
        title: 'Head Lamp Assembly Right',
        price: 1819,
        category: 'elec',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/486d1388408250bf3bc4f6f2b0a4b974.webp',
        price2: 408, // Corrected MRP
      },
      {
        title: 'Head Lamp Assembly Left',
        price: 8377,
        category: 'elec',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/3a7d32b511a172956caa31e1d8c5f014.webp',
        price2: 3060, // Corrected MRP
      },
      {
        title: 'Fog Lamp',
        price: 744,
        category: 'ele',
        image: 'https://boodmo.com/media/cache/catalog_part/images/parts/1a572a5147374b31d8e70e7d6eb52206.webp'
      },
      {
        title: 'Coolant',
        price: 608,
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/98d8e48024549f9a70c664f8a767247a.webp',
        price2: 738, // Corrected MRP
      },
      {
        title: 'Leaf Spring',
        price: 2369,
        category: 'Suspension',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/aad56b1ab9f6abb59d00f54c07ac3210.webp',
        price2: 2615, // Corrected MRP
      },
      {
        title: 'Coil Spring',
        category: 'Suspension',
        price: 866,
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/ce7ce98d300a859d66e3336951f88ee9.webp',
        price2: 928, // Corrected MRP
      },
      {
        title: 'Horn Pad',
        price: 704,
        category: 'elec',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/337cd301982a2550881269fb77898409.webp',
        price2: 990, // Corrected MRP
      },
      {
        title: 'EGR Valve Assembly',
        price: 4398,
        category: 'Exhaust',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/d1fada6e0957b0ab8ff511e65202909a.webp',
        price2: 4970, // Corrected MRP
      },
      {
        title: 'Catalytic Convertor',
        price: 784,
        category: 'Exhaust',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/e1b248e1e83ef7e5a10dbc8fd7bea0f5.webp',
        price2: 955, // Corrected MRP
      },
      {
        title: 'Water Pump',
        price: 2353,
        category: 'Cooling',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/83fc2085aa5f2466e741f785d2e9236b.webp',
        price2: 2835, // Corrected MRP
      },
      {
        title: 'Thermostat',
        price: 1589,
        category: 'Cooling',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/19890d4ce858111a30e068b1b9dd9d0a.webp',
        price2: 3362, // Corrected MRP
      },
      {
        title: 'Radiator Assembly',
        price: 2263,
        category: 'Cooling',
        
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/a99fcb3b19a7445977539101eb880afa.webp',
        price2: 2537, // Corrected MRP
      },
      {
        title: 'Coolant Fan',
        price: 626,
        category: 'Cooling',
        image:
          'https://boodmo.com/media/cache/catalog_part/images/parts/d837ed816e3ccbc475a47b02bdd021f6.webp',
        price2: 714, // Corrected MRP
      }
  ];

  const filteredParts = partData.filter(part =>
    (selectedCategory === 'All' || part.category === selectedCategory) &&
    part.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const blk = (v) => {
    v.target.style.backgroundColor = 'red'
    v.target.style.color = 'black'
    v.target.style.fontWeight = 'bold'
    v.target.style.border = 'none'
  }

  const blk1 = (v) => {
    v.target.style.backgroundColor = 'black'
    v.target.style.color = '#bababa'
    v.target.style.border = 'none'
  }

  const lkb = (v) => {
    v.target.style.backgroundColor = '#bababa'
    v.target.style.color = 'black'
  }

  const lkb1 = (v) => {
    v.target.style.backgroundColor = 'black'
    v.target.style.color = 'white'
    v.target.style.fontWeight = 'normal'
    v.target.style.border = '1px solid white'
  }

  const addToCart = (item) => {
    axios
      .post('http://localhost:5000/api/addToCart', item)
      .then((response) => {
        setCart([...cart, response.data]);
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
      });
  };

  return (
    <div style={{background: "#444444"}}>
      <div className='row'>
        <div className='col-md-2'>
          <Link to="/">
            <img
              style={{ cursor: 'pointer', width: '100%', borderRadius: '0px 60px 60px 0px' }}
              src="Logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className='col-md-3 mt-4'>
            <h2 style={{ color: '#bababa', textDecoration: 'none' }}>SPARE'Z</h2>
        </div>
        <div className='col-md-3'></div>
        <div className='col-md-3 mt-3'>
          <Link to={`/cart`}>
            <button onMouseOver={blk1} onMouseLeave={lkb} className='btn78' >Cart</button></Link>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <img alt='' src='sparee.jpg' width={'100%'}/>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-md-12'>
          <h1 style={{ color: '#bababa'}}>Featured Product'z</h1>
        </div>
      </div>





      <div className='row'>
        {featredpro.map((item, index) => (
          <div key={index} className="col-md-3 mt-5">
            <div className="card kart">
              <img
                src={item.image}
                className="card-img-top"
                style={{ borderRadius: '30px 30px 0px 0px' }}
                alt=""
              />
              <div className="card-body mt-3">
                <h6 className="card-title" style={{textAlign:'left', color:'#bababa', fontWeight:'bold'}}>{item.title}</h6>
                <h6 className="card-text mt-2" style={{textAlign:'left', fontWeight:'bold'}}>
                  <span>&#8377;</span>
                  {item.price}{'.00'}
                  {/* <strike>
                    MRP <span>&#8377;</span>{item.price2}
                  </strike> */}
                </h6>
                <button className='btn3 mt-3 mb-4' onMouseOver={blk} onMouseLeave={lkb1} onClick={() => addToCart(item)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>





      
      <div className='row mt-5'>
        <div className='col-md-12'>
          <h1 style={{ color: '#bababa'}}>Our Brand'z</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-2'> 
            <img alt='' className='vikram' src='https://www.partsbigboss.in/media/brand_images/bosch_modified.png'/>
        </div>
        <div className='col-md-2'> 
            <img alt='' className='vikram' src='https://www.partsbigboss.in/media/wysiwyg/porto/homepage/content/04/brands_walker.png'/>
        </div>
        <div className='col-md-2'> 
            <img alt='' className='vikram' src='https://www.partsbigboss.in/media/wysiwyg/porto/homepage/content/04/brands-fv.png'/>
        </div>
        <div className='col-md-2'> 
            <img alt='' className='vikram' src='https://www.partsbigboss.in/media/wysiwyg/porto/homepage/content/04/brands-lff.png'/>
        </div>
        <div className='col-md-2'> 
            <img alt='' className='vikram' src='https://www.partsbigboss.in/media/brand_images/motherson_modified.png'/>
        </div>
        <div className='col-md-2'> 
            <img alt='' className='vikram' src='https://www.partsbigboss.in/media/wysiwyg/porto/homepage/content/04/brands-carstar.png'/>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-md-12'>
          <h1 style={{ color: '#bababa'}}>Shop by Popular Categories</h1>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-md-3'>
          <img src='https://www.shopee365.com/media/wysiwyg/car-engine.jpg' alt="" style={{width:'100%', borderRadius:'7%'}} />
        </div>
        <div className='col-md-3'>
          <img alt='' src='https://www.shopee365.com/media/wysiwyg/brake-parts.jpg' style={{width:'100%', borderRadius:'7%'}} />
        </div>
        <div className='col-md-3'>
          <img alt='' src='https://www.shopee365.com/media/wysiwyg/suspension-parts.jpg' style={{width:'100%', borderRadius:'7%'}} />
        </div>
        <div className='col-md-3'>
          <img alt='' src='https://www.shopee365.com/media/wysiwyg/car-ac.jpg' style={{width:'100%', borderRadius:'7%'}} />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 mt-5'> 
          <h6 style={{ color: '#bababa'}}><b>Search and filter for your favorite auto spare part now and get your vehicle back on the road in no time!</b></h6>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-md-3'></div>
        <div className='col-md-3'>
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: '70%',
                padding: '5px',
                borderRadius: '5px',
                backgroundColor: "#bababa",
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div className='col-md-3'>
          <select
          style={{backgroundColor:'#bababa', width:"50%", height:'40px', borderRadius:'10px'}}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Engine">Engine</option>
            <option value="Brakes">Brakes</option>
            <option value="Suspension">Suspension</option>
            <option value="Cooling">Cooling</option>
            <option value="elec">Sensors and Electronics</option>
            <option value="Exhaust">Exhaust</option>
          </select>
        </div>
        <div className='col-md-3'></div>
      </div>
      <div className='row mt-5'>
        {filteredParts.map((item, index) => (
          <div key={index} className="col-md-3 mt-5">
            <div className="card kart">
              <img
                src={item.image}
                className="card-img-top"
                style={{ borderRadius: '30px 30px 0px 0px' }}
                alt=""
              />
              <div className="card-body mt-3">
                <h6 className="card-title" style={{textAlign:'left', color:'#bababa', fontWeight:'bold'}}>{item.title}</h6>
                <h6 className="card-text mt-2" style={{textAlign:'left', fontWeight:'bold'}}>
                  <span>&#8377;</span>
                  {item.price}{'.00'}
                  {/* <strike>
                    MRP <span>&#8377;</span>{item.price2}
                  </strike> */}
                </h6>
                <button className='btn3 mt-3 mb-4' onMouseOver={blk} onMouseLeave={lkb1} onClick={() => addToCart(item)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className="bg-dark text-center text-white mt-5">
                
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-google"></i>
                    </a>


                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-instagram"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i>
                    </a>

                    
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-github"></i>
                    </a>
                    </section>
                </div>

                
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    
                    <h6 className="text-white">© 2020 Copyright: Dyno Car Care™</h6>
                </div>
                </footer>
                <ScrollToTopButton/>
    </div>
  );
}
