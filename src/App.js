import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import LaunchIcon from '@mui/icons-material/Launch';
import { useEffect, useState } from 'react';

function App() {
  return (
    <TitlebarImageList/>
  );
}



function TitlebarImageList() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Always set numColumns to 1 to have one item per row
  const numColumns = 1;

  return (
    <ImageList sx={{ width: '100%', maxWidth: 800, margin: 'auto' }} cols={numColumns}>
      {sitesData.map((item) => (
        <ImageListItem key={item.img} sx={{ width: '100%' }}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ width: '100%', height: 'auto' }}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.type}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                href={item.link}
              >
                <LaunchIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
  }

const sitesData = [
  {
    img: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/2c/72/61.jpg',
    title: 'Underground City',
    link: 'https://www.tripadvisor.com/AttractionProductReview-g186525-d11456899-Underground_Walking_Tour_in_Edinburgh-Edinburgh_Scotland.html',
    type: 'Seværdighed'
  },
  {
    img: 'https://edinburghtourist.co.uk/wp-content/uploads/2017/04/arthurs-seat.jpg',
    title: 'Arthurs Seat',
    link: 'https://www.tripadvisor.com/Attraction_Review-g186525-d195211-Reviews-Arthur_s_Seat-Edinburgh_Scotland.html',
    type: 'Seværdighed'  },
  {
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/34/80/d7/the-upper-gallery-in.jpg?w=1200&h=-1&s=1',
    title: 'Surgeons Hall',
    link: 'https://www.tripadvisor.com/Attraction_Review-g186525-d582878-Reviews-Surgeons_Hall_Museums-Edinburgh_Scotland.html',
    type: 'Seværdighed'
  },
  {
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/e4/81/01/the-natural-world-gallery.jpg?w=1200&h=-1&s=1',
    title: 'National Museum of Scotland',
    link: 'https://www.tripadvisor.com/Attraction_Review-g186525-d2359701-Reviews-National_Museum_of_Scotland-Edinburgh_Scotland.html',
    type: 'Seværdighed'
  },
  {
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/56/a0/0a/infinity-mirror-box.jpg?w=1200&h=-1&s=1',
    title: 'Camera Obscura and World of Illusions',
    link: 'https://www.tripadvisor.com/Attraction_Review-g186525-d213416-Reviews-Camera_Obscura_and_World_of_Illusions-Edinburgh_Scotland.html',
    type: 'Seværdighed'
  },
  {
    img: 'https://media.architecturaldigest.com/photos/6379544249247ea9109000cf/16:9/w_2560%2Cc_limit/GettyImages-137959386.jpg',
    title: 'Royal Yacht Britannia',
    link: 'https://www.tripadvisor.com/Attraction_Review-g186525-d187652-Reviews-Royal_Yacht_Britannia-Edinburgh_Scotland.html',
    type: 'Seværdighed'
  },
  {
    img: 'https://lh3.googleusercontent.com/p/AF1QipORgiFo-GZfRqm7v8kVk2koKeJFAldv_t2blsGL=s1360-w1360-h1020',
    title: 'The Royal Mile',
    link: 'https://www.visitscotland.com/info/towns-villages/royal-mile-and-grassmarket-p918401',
    type: 'Seværdighed'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Glenfinnan_Viaduct_-_2022.jpg/450px-Glenfinnan_Viaduct_-_2022.jpg',
    title: 'Hogwarts Express',
    link: 'https://www.haggisadventures.com/1-day-tours/1-day-harry-potter-the-hogwarts-express',
    type: 'Seværdighed'
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/5f3566787f09e77afdbefc52/ad5c700c-fedb-49e2-882a-5ea359c96b0f/IMG_0976.jpeg+Sunday.jpeg?format=1500w',
    title: 'The Ox',
    link: 'https://www.theoxedinburgh.com/',
    type: 'Restaurant'
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/63c5aeda18223105b059c09b/4f0aa48e-2a42-4016-a113-f1a504c01675/Lunchdeals.jpg?format=2500w',
    title: 'Harajuku Kitchen',
    link: 'https://harajukukitchen.co.uk/',
    type: 'Restaurant'
  },
  {
    img: 'https://www.mowglistreetfood.com/wp-content/uploads/2023/01/Mowgli_Food_Intro-768x768.jpg',
    title: 'Mowgli Street Food',
    link: 'https://www.mowglistreetfood.com/restaurants/edinburgh/',
    type: 'Restaurant'
  },
  {
    img: 'https://static.wixstatic.com/media/bf2917_d1140f133549428fad514324ffdaf36f~mv2.jpg/v1/fill/w_950,h_1010,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bf2917_d1140f133549428fad514324ffdaf36f~mv2.jpg',
    title: 'Joelato (Is)',
    link: 'https://www.joelato.co.uk/',
    type: 'Restaurant'
  },
  {
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/87/8c/63/sharing-roasts-for-2.jpg',
    title: 'Hawksmoor',
    link: 'https://thehawksmoor.com/locations/edinburgh/',
    type: 'Restaurant'
  },
  {
    img: 'https://resdiaryportal.wpengine.com/wp-content/uploads/2023/02/Dish_Cult_-_the_piemaker.jpg',
    title: 'The Pie Maker',
    link: 'http://www.thepiemaker.co.uk/',
    type: 'Restaurant'
  },
  {
    img: 'https://meatmanagement.com/wp-content/uploads/2020/08/Bross-Bagel.jpg',
    title: 'Bross Bagels',
    link: 'https://www.brossbagels.com/',
    type: 'Restaurant'
  },
  {
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/28/e5/89/f1/yakitori.jpg',
    title: 'Noto',
    link: 'https://notoedinburgh.co.uk/',
    type: 'Restaurant'
  },
  {
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/24/ef/0f/dc/plates-to-share.jpg',
    title: 'Dulse',
    link: 'https://www.dulse.co.uk/',
    type: 'Alkohol'
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0416/8574/5815/files/Triple_Stacked_2048x2048.png?v=1671648147',
    title: 'Vault city brewing',
    link: 'https://vaultcity.co.uk/pages/taprooms',
    type: 'Alkohol'
  },
  {
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/07/8f/a1/52/stewart-brewing-the-shop.jpg',
    title: 'Stewart Brewing Experience',
    link: 'https://www.tripadvisor.com/Attraction_Review-g186525-d5773141-Reviews-Stewart_Brewing_Experience-Edinburgh_Scotland.html',
    type: 'Alkohol'
  },
  {
    img: 'https://live.staticflickr.com/4721/25850385348_e428a9f1a0_b.jpg',
    title: 'Pubs',
    link: 'https://www.timeout.com/edinburgh/bars-and-pubs/the-best-pubs-in-edinburgh',
    type: 'Alkohol'
  },
  {
    img: 'https://a0.muscache.com/im/pictures/fa5be9ab-05ec-4f7b-93e0-a4b992431ddf.jpg',
    title: 'Lejlighed 1',
    link: 'https://www.airbnb.com/rooms/5903320?adults=4&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2024-10-17&check_out=2024-10-21&source_impression_id=p3_1709403427_mGiG%2FVzwIq%2FHM1G1&previous_page_section_name=1000&federated_search_id=b7b33dbd-a887-4efe-8fd1-49f492c2fdfe',
    type: 'Air bnb'
  },
  {
    img: 'https://a0.muscache.com/im/pictures/250ea79b-147f-4b56-9e1f-ab04ff44218d.jpg',
    title: 'Lejlighed 2',
    link: 'https://www.airbnb.com/rooms/6302228?adults=4&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2024-10-17&check_out=2024-10-21&source_impression_id=p3_1709403470_YaukrZqQshREvh6u&previous_page_section_name=1000&federated_search_id=b7b33dbd-a887-4efe-8fd1-49f492c2fdfe',
    type: 'Air bnb'
  },
]
  

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
    link: 'https://google.com'
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];

export default App;
