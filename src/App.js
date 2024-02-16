import logo from './logo.svg';
import './App.css';
import Quotes from './Quotes'
import React, { useState } from 'react';

function App() {
  const mainCategories = ["Educational", "Inspirational", "Love"];
  // const subCategories = ["Science", "Literature", "Art","Exercise", "Goals", "Money","Family", "Friends", "Animals"];

  const subCategories = {
    Educational: ["Science", "Literature", "Art"],
    Inspirational: ["Exercise", "Goals", "Money"],
    Love: ["Family", "Friends", "Animals"],
  };
 
  const Quotes = {
      "Quotes": [
          {
            "main":"Educational",
            "sub":"Science",
            "quote": "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
            "author": "Albert Einstein"
          },
          {
            "main":"Educational",
            "sub":"Science",
            "quote": "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world.",
            "author": "Louis Pasteur"
          },
          {
            "main":"Educational",
            "sub":"Science",
            "quote": "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
            "author": "Stephen Hawking"
          },
          {
            "main":"Educational",
            "sub":"Literature",
            "quote": "A room without books is like a body without a soul.",
            "author": "Marcus Tullius Cicero"
          },
          {
            "main":"Educational",
            "sub":"Literature",
            "quote": "The only thing that you absolutely have to know is the location of the library.",
            "author": "Albert Einstein"
          },
          {
            "main":"Educational",
            "sub":"Literature",
            "quote": "Words are, in my not-so-humble opinion, our most inexhaustible source of magic.",
            "author": "J.K. Rowling"
          },
          {
            "main":"Educational",
            "sub":"Art",
            "quote": "Every artist was first an amateur.",
            "author": "Ralph Waldo Emerson"
          },
          {
            "main":"Educational",
            "sub":"Art",
            "quote": "Art enables us to find ourselves and lose ourselves at the same time.",
            "author": "Thomas Merton"
          },
          {
            "main":"Educational",
            "sub":"Art",
            "quote": "Creativity takes courage.",
            "author": "Henri Matisse"
          },
          {
            "main":"Inspirational",
            "sub":"Exercise",
            "quote": "The only bad workout is the one that didn't happen.",
            "author": "Unknown"
          },
          {
            "main":"Inspirational",
            "sub":"Exercise",
            "quote": "Sweat is magic. Cover yourself in it daily to grant your wishes.",
            "author": "Unknown"
          },
          {
            "main":"Inspirational",
            "sub":"Exercise",
            "quote": "Exercise is a celebration of what your body can do, not a punishment for what you ate.",
            "author": "Unknown"
          },
          {
            "main":"Inspirational",
            "sub":"Goals",
            "quote": "Set a goal that makes you want to jump out of bed in the morning.",
            "author": "Unknown"
          },
          {
            "main":"Inspirational",
            "sub":"Goals",
            "quote": "Dream big and dare to fail.",
            "author": "Norman Vaughan"
          },
          {
            "main":"Inspirational",
            "sub":"Goals",
            "quote": "Your future is created by what you do today, not tomorrow.",
            "author": "Robert Kiyosaki"
          },
          {
            "main":"Inspirational",
            "sub":"Money",
            "quote": "The lack of money is the root of all evil.",
            "author": "Mark Twain"
          },
          {
            "main":"Inspirational",
            "sub":"Money",
            "quote": "Money often costs too much.",
            "author": "Ralph Waldo Emerson"
          },
          {
            "main":"Inspirational",
            "sub":"Money",
            "quote": "A wise person should have money in their head, but not in their heart.",
            "author": "Jonathan Swift"
          },
          {
            "main":"Love",
            "sub":"Family",
            "quote": "Family is not an important thing. It's everything.",
            "author": "Michael J. Fox"
          },
          {
            "main":"Love",
            "sub":"Family",
            "quote": "In family life, love is the oil that eases friction, the cement that binds closer together, and the music that brings harmony.",
            "author": "Eva Burrows"
          },
          {
            "main":"Love",
            "sub":"Family",
            "quote": "The love of family and the admiration of friends is much more important than wealth and privilege.",
            "author": "Charles Kuralt"
          },
          {
            "main":"Love",
            "sub":"Friends",
            "quote": "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
            "author": "C.S. Lewis"
          },
          {
            "main":"Love",
            "sub":"Friends",
            "quote": "A real friend is one who walks in when the rest of the world walks out.",
            "author": "Walter Winchell"
          },
          {
            "main":"Love",
            "sub":"Friends",
            "quote": "Friendship is the only cement that will ever hold the world together.",
            "author": "Woodrow Wilson"
          },
          {
            "main":"Love",
            "sub":"Animals",
            "quote": "Until one has loved an animal, a part of one's soul remains unawakened.",
            "author": "Anatole France"
          },
          {
            "main":"Love",
            "sub":"Animals",
            "quote": "The greatness of a nation and its moral progress can be judged by the way its animals are treated.",
            "author": "Mahatma Gandhi"
          },
          {
            "main":"Love",
            "sub":"Animals",
            "quote": "Animals are such agreeable friends—they ask no questions; they pass no criticisms.",
            "author": "George Eliot"
          }
        ]
      }
  

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedSub(null);
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1>Category Selection</h1>
      {mainCategories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          style={{ marginRight: '10px' }}
        >
          {category}
        </button>
      ))}

      {selectedCategory && (
        <div>
          <h2>Subcategories for {selectedCategory}:</h2>
          {subCategories[selectedCategory].map((subCategory) => (
            <button key={subCategory}
            onClick={() => setSelectedSub(subCategory)}>{subCategory}</button>
          ))}
          
        </div>

        
      )}
      {selectedCategory === null ? (
          Quotes.Quotes.map((quoteObj, index) => (
            <div className='qCard' key={index}>
              <p>{quoteObj.quote}</p>
              <p>- {quoteObj.author}</p>
            </div>
          ))
        ) : (
          Quotes.Quotes.filter((quoteObj) => {
            if (selectedSub === null) {
              return quoteObj.main === selectedCategory;
            } else {
              return quoteObj.main === selectedCategory && quoteObj.sub === selectedSub;
            }
          }).map((filteredQuote, index) => (
            <div className='qCard' key={index}>
              <p>{filteredQuote.quote}</p>
              <p>- {filteredQuote.author}</p>
            </div>
          ))
      )}
    </div>
  );

}

export default App;
