import { useEffect, useState } from "react"

//id, sixe, x, y , opacity, animationDuration
//id, sixe, x, y , delay, animationDuration

export const StarBackground = () => {
    const [stars, setStars]= useState([]);
    const [meteors, setMeteors]= useState([]);

    useEffect(() => {
      generateStarts();
      generateMeteors();

      const handleResize=() => {
        generateStarts();
      }

      window.addEventListener('resize', handleResize)

      return ()=>window.removeEventListener("resize", handleResize)
    }, []);
    

    const generateStarts =()=>{
        const numberOfStars= Math.floor(window.innerWidth * window.innerHeight/ 10000)

        const newStarts=[]

        for(let i=0; i<numberOfStars; i++){
            newStarts.push(
                {
                    id:i,
                    size: Math.random()*3+1,
                    x: Math.random()*100,
                    y:Math.random()*100,
                    opacity: Math.random()*0.5+0.5,
                    animationDuration: Math.random()*4+2,
                }
            );
        }
        setStars(newStarts);
    }

     const generateMeteors =()=>{
        const numberOfMeteors= 4;

        const newMeteors=[]

        for(let i=0; i<numberOfMeteors; i++){
            newMeteors.push(
                {
                    id:i,
                    size: Math.random()*2+1,
                    x: Math.random()*100,
                    y:Math.random()*20,
                    delay: Math.random()*15,
                    animationDuration: Math.random()*3+3,
                }
            );
        }
        setMeteors(newMeteors);
    }

    return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
        <div
            key={star.id}
            className="star animate-pulse-subtle"
            style={{
            width: star.size + "px",                // size of the star
            height: star.size + "px",               // same as width -> perfect circle
            left: star.x + "%",                     // horizontal position
            top: star.y + "%",                      // vertical position
            opacity: star.opacity,                  // transparency for depth effect
            animationDuration: star.animationDuration + "s", // different pulse speed
            }}
        />
        ))}

        {meteors.map((meteor) => (
        <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
            width: meteor.size * 50 + "px",                // size of the star
            height: meteor.size * 2+ "px",               // same as width -> perfect circle
            left: meteor.x + "%",                     // horizontal position
            top: meteor.y + "%",                      // vertical position
            animationDelay: meteor.delay,                  // transparency for depth effect
            animationDuration: meteor.animationDuration + "s", // different pulse speed
            }}
        />
        ))}
    </div>
    );
}