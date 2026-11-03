"use client";
import { useState, useEffect } from "react";
const photos = [
 ["growth-marketing-workshop-group.png", "Participants at a growth marketing workshop in Bangalore"],
 ["growth-marketing-workshop-presenting.png", "Presenting at a growth marketing workshop in Bangalore"],
 ["thats-what-she-sold-group.jpg", "Women marketers gathered for That’s What She Sold"],
 ["hosting-close.jpg", "Hosting a session for women marketers"],
 ["pitch-challenge.jpg", "A participant presents during the pitch challenge"],
 ["host-team.jpg", "The team behind That’s What She Sold"],
 ["hosting-room.jpg", "Hosting a session at the meetup"],
 ["women-marketers-group.jpg", "A women-only marketing meetup in Bangalore"]
];
export default function WorkshopGallery(){const [selected,setSelected]=useState<number|null>(null);useEffect(()=>{const f=(e:KeyboardEvent)=>{if(e.key==='Escape')setSelected(null)};window.addEventListener('keydown',f);return()=>window.removeEventListener('keydown',f)},[]);return <><div className="community-gallery" aria-label="Growth marketing workshops and community events in Bangalore">{photos.map(([src,alt],i)=><button className={`gallery-photo gallery-photo-${i+1}`} key={src} onClick={()=>setSelected(i)} aria-label={`View photo: ${alt}`}><img src={`/events/${src}`} alt={alt} loading="lazy"/><span className="gallery-enlarge" aria-hidden="true">↗</span></button>)}</div>{selected!==null&&<div className="photo-overlay" onClick={()=>setSelected(null)} role="dialog" aria-modal="true" aria-label="Workshop photograph"><div className="photo-view" onClick={e=>e.stopPropagation()}><button className="photo-close" autoFocus onClick={()=>setSelected(null)} aria-label="Close photo">×</button><img src={`/events/${photos[selected][0]}`} alt={photos[selected][1]}/><p>{photos[selected][1]}</p></div></div>}</>}
