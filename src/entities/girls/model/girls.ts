import {createSlice} from "@reduxjs/toolkit";
import {AppDispatch} from "../../../app/store";

export interface IGirl {
    name: string
}

interface IGirlsState {
    girls: IGirl[];
    searchingNames: {
        girlsFormatted: string,
        girlsOriginal: string[],
    };
}

const initialState: IGirlsState = {
    girls: [
        {name: 'Aaliyah Hadid'}, {name: 'Aaliyah Love'}, {name: 'Abbie Maley'}, {name: 'Abella Anderson'}, {name: 'Abella Danger'}, {name: 'Abigail Mac'}, {name: 'Abigaile Johnson'}, {name: 'Addie Andrews'}, {name: 'Adira Allure'}, {name: 'Adria Rae'}, {name: 'Adriana Chechik'}, {name: 'Adriana Maya'}, {name: 'Agatha Vega'}, {name: 'Ai Uehara'}, {name: 'Aiden Ashley'}, {name: 'Aidra Fox'}, {name: 'Aische Pervers'}, {name: 'AJ Applegate'}, {name: 'Alanah Rae'}, {name: 'Alena Croft'}, {name: 'Alessa Savage'}, {name: 'Alessandra Jane'}, {name: 'Aletta Ocean'}, {name: 'Alex Adams'}, {name: 'Alex Blake'}, {name: 'Alex Coal'}, {name: 'Alex D'}, {name: 'Alex Grey'}, {name: 'Alex Harper'}, {name: 'Alexa Grace'}, {name: 'Alexa Tomas'}, {name: 'Alexia Anders'}, {name: 'Alexis Adams'}, {name: 'Alexis Andrews'}, {name: 'Alexis Crystal'}, {name: 'Alexis Fawx'}, {name: 'Alexis Tae'}, {name: 'Alexis Texas'}, {name: 'Alice Bong'}, {name: 'Alice March'}, {name: 'Alicia Williams'}, {name: 'Alina Ali'}, {name: 'Alina Belle'}, {name: 'Alina Li'}, {name: 'Alina Lopez'}, {name: 'Alison Tyler'}, {name: 'Alissa Noir'}, {name: 'Alix Lynx'}, {name: 'Alli Rae'}, {name: 'Allie Addison'}, {name: 'Allie Haze'}, {name: 'Allie Nicole'}, {name: 'Alura Jenson'}, {name: 'Alyssa Hart'}, {name: 'Alyssia Kent'}, {name: 'Amaranta Hank'}, {name: 'Amarna Miller'}, {name: 'Amber Alena'}, {name: 'Amber Hahn'}, {name: 'Amia Miley'}, {name: 'Amilia Onyx'}, {name: 'Amirah Adara'}, {name: 'Amy Anderssen'}, {name: 'Ana Foxxx'}, {name: 'Anastasia Brokelyn'}, {name: 'Anastasia Knight'}, {name: 'Anastasia Lux'}, {name: 'Angel'}, {name: 'Angel Emily'}, {name: 'Angel Smalls'}, {name: 'Angel Wicky'}, {name: 'Angel Youngs'}, {name: 'Angela White'}, {name: 'Angelina Castro'}, {name: 'Angelina Valentine'}, {name: 'Anikka Albrite'}, {name: 'Anissa Kate'}, {name: 'Anna Bell Peaks'}, {name: 'Anna Polina'}, {name: 'Anna Rose'}, {name: 'Annabel Redd'}, {name: 'Anni Angel'}, {name: 'Anny Aurora'}, {name: 'Antonio Mallorca'}, {name: 'Anya Ivy'}, {name: 'Anya Olsen'}, {name: 'Apolonia Lapiedra'}, {name: 'April Olsen'}, {name: 'April O Neil'}, {name: 'Arabelle Raphael'}, {name: 'Aria Alexander'}, {name: 'Aria Banks'}, {name: 'Aria Lee'}, {name: 'Aria Sky'}, {name: 'Ariana Marie'}, {name: 'Ariella Ferrera'}, {name: 'Arietta Adams'}, {name: 'Arwen Datnoid'}, {name: 'Arya Fae'}, {name: 'Aryana Adin'}, {name: 'Asa Akira'}, {name: 'Ashley Adams'}, {name: 'Ashley Alban'}, {name: 'Ashley Fires'}, {name: 'Ashley Sinclair'}, {name: 'Ashly Anderson'}, {name: 'Athena Faris'}, {name: 'Athena Rayne'}, {name: 'Aubree Valentine'}, {name: 'Aubrey Black'}, {name: 'Aubrey Kate'}, {name: 'Aubrey Sinclair'}, {name: 'Audrey Bitoni'}, {name: 'August Ames'}, {name: 'August Taylor'}, {name: 'Autumn Falls'}, {name: 'Ava Addams'}, {name: 'Ava Dalush'}, {name: 'Ava Devine'}, {name: 'Ava Koxxx'}, {name: 'Ava Taylor'}, {name: 'Avery Black'}, {name: 'Avery Cristy'}, {name: 'Avi Love'}, {name: 'AwesomeKate'}, {name: 'Ayumi Anime'}, {name: 'Azul Hermosa'}, {name: 'Bailey Base'}, {name: 'Bailey Brooke'}, {name: 'Becky Bandini'}, {name: 'Bella Bellz'}, {name: 'Bella Mur'}, {name: 'Bella Rolland'}, {name: 'Bella Rose'}, {name: 'Belle Knox'}, {name: 'Bettie Bondage'}, {name: 'Blair Williams'}, {name: 'Blaire Ivory'}, {name: 'Blake Blossom'}, {name: 'Blanche Bradburry'}, {name: 'Blondie Fesser'}, {name: 'Bonnie Rotten'}, {name: 'Brad Newman'}, {name: 'Brandi Bae'}, {name: 'Brandi Love'}, {name: 'Bree Olson'}, {name: 'Brenna Sparks'}, {name: 'Briana Banderas'}, {name: 'Brianna Beach'}, {name: 'Bridgette B'}, {name: 'Britney Amber'}, {name: 'Brittney White'}, {name: 'Brooke Beretta'}, {name: 'Brooke Wylde'}, {name: 'Brooklyn Chase'}, {name: 'Brooklyn Gray'}, {name: 'Bruce Venture'}, {name: 'Bryci'}, {name: 'Bunny Colby'}, {name: 'Cadence Lux'}, {name: 'Cadey Mercury'}, {name: 'Cali Carter'}, {name: 'Cameron Canela'}, {name: 'Candice Dare'}, {name: 'Candy Love'}, {name: 'Canela Skin'}, {name: 'Capri Cavanni'}, {name: 'Carly Rae Summers'}, {name: 'Carmela Clutch'}, {name: 'Carmella Bing'}, {name: 'Carmen Caliente'}, {name: 'Carmen Valentina'}, {name: 'Carolina Sweets'}, {name: 'Carter Cruise'}, {name: 'Casca Akashova'}, {name: 'Casey Calvert'}, {name: 'Casey Kisses'}, {name: 'Cassidy Banks'}, {name: 'Cassidy Klein'}, {name: 'Cassie Del Isla'}, {name: 'Cathy Heaven'}, {name: 'Cecilia Lion'}, {name: 'Chad White'}, {name: 'Chanel Preston'}, {name: 'Chanel Santini'}, {name: 'Chanell Heart'}, {name: 'Charity Crawford'}, {name: 'Charlee Chase'}, {name: 'Charles Dera'}, {name: 'Charlie Red'}, {name: 'Charlotte Sartre'}, {name: 'Chelsea Vegas'}, {name: 'Cherie Deville'}, {name: 'Cherokee D Ass'}, {name: 'Cherry Crush'}, {name: 'Cherry Kiss'}, {name: 'Chloe Amour'}, {name: 'Chloe Cherry'}, {name: 'Chloe Lamour'}, {name: 'Chloe Temple'}, {name: 'Chris Diamond'}, {name: 'Chris Strokes'}, {name: 'Christiana Cinn'}, {name: 'Christie Stevens'}, {name: 'Christy Mack'}, {name: 'Cindy Starfall'}, {name: 'Claire Castel'}, {name: 'Clara Dee'}, {name: 'Claudia Bavel'}, {name: 'Clea Gaultier'}, {name: 'Clover Baltimore'}, {name: 'Coco Lovelock'}, {name: 'Coco Vandi'}, {name: 'Codi Vore'}, {name: 'Connie Carter'}, {name: 'Cory Chase'}, {name: 'Crystal Rush'}, {name: 'Cytheria'}, {name: 'Daisy Lee'}, {name: 'Daisy Stone'}, {name: 'Daisy Taylor'}, {name: 'Dakota Skye'}, {name: 'Damon Dice'}, {name: 'Dana DeArmond'}, {name: 'Dani Daniels'}, {name: 'Dani Jensen'}, {name: 'Danika Mori'}, {name: 'Danni Rivers'}, {name: 'Danny D'}, {name: 'Darcia Lee'}, {name: 'Darcie Dolce'}, {name: 'Dava Foxx'}, {name: 'Deauxma'}, {name: 'Demi Sutra'}, {name: 'Desiree Dulce'}, {name: 'Devils Kos'}, {name: 'Diamond Jackson'}, {name: 'Diamond Kitty'}, {name: 'Dillion Harper'}, {name: 'Dixie Lynn'}, {name: 'Dolly Little'}, {name: 'Dredd'}, {name: 'Dylan Ryder'}, {name: 'Elena Koshka'}, {name: 'Elisa Sanches'}, {name: 'Eliza Ibarra'}, {name: 'Ella Hughes'}, {name: 'Ella Knox'}, {name: 'Ellie Idol'}, {name: 'Elsa Jean'}, {name: 'Emanuelly Raquel'}, {name: 'Ember Snow'}, {name: 'Emily Addison'}, {name: 'Emily Willis'}, {name: 'Emma Butt'}, {name: 'Emma Hix'}, {name: 'Emma Starletto'}, {name: 'Erin Electra'}, {name: 'Esperanza Gomez'}, {name: 'Eva Angelina'}, {name: 'Eva Elfie'}, {name: 'Eva Long'}, {name: 'Eva Lovia'}, {name: 'Eva Notty'}, {name: 'Evelin Stone'}, {name: 'Eveline Dellai'}, {name: 'Evelyn Claire'}, {name: 'Farrah Abraham'}, {name: 'Faye Reagan'}, {name: 'Fiona Fuchs'}, {name: 'Foxy Di'}, {name: 'Franceska Jaimes'}, {name: 'Gabbie Carter'}, {name: 'Gabriela Lopez'}, {name: 'Gabriella Paltrova'}, {name: 'George Uhl'}, {name: 'Georgie Lyall'}, {name: 'Gia Derza'}, {name: 'Gia Milana'}, {name: 'Gia Paige'}, {name: 'Gianna Dior'}, {name: 'Gianna Michaels'}, {name: 'Gina Devine'}, {name: 'Gina Gerson'}, {name: 'Gina Valentina'}, {name: 'Ginebra Bellucci'}, {name: 'Giselle Montes'}, {name: 'GoGo FukMe'}, {name: 'Haley Reed'}, {name: 'Haley Spades'}, {name: 'Halle Hayes'}, {name: 'Hanna Secret'}, {name: 'Hannah Brooks'}, {name: 'Hannah Hays'}, {name: 'Harley Dean'}, {name: 'Harley Jade'}, {name: 'Harlow Harrison'}, {name: 'Harlowe Blue'}, {name: 'Harmony Reigns'}, {name: 'Harmony Wonder'}, {name: 'Havana Bleu'}, {name: 'Hazel Grace'}, {name: 'Hazel Moore'}, {name: 'Heather Harmon'}, {name: 'Heather Vahn'}, {name: 'Helena Price'}, {name: 'Hime Marie'}, {name: 'Hitomi Tanaka'}, {name: 'Hoby Buchanon'}, {name: 'Holly Hendrix'}, {name: 'Holly Michaels'}, {name: 'Honey Gold'}, {name: 'Honey Moon'}, {name: 'ImMeganLive'}, {name: 'India Summer'}, {name: 'Indica Flower'}, {name: 'Indica Monroe'}, {name: 'Indigo White'}, {name: 'Isabelle Deltore'}, {name: 'Isis Love'}, {name: 'Ivy Lebelle'}, {name: 'Ivy Wolfe'}, {name: 'Izzy Bell'}, {name: 'Jackie Knight'}, {name: 'Jada Fire'}, {name: 'Jada Kai'}, {name: 'Jada Stevens'}, {name: 'Jade Jordan'}, {name: 'Jade Kush'}, {name: 'James Deen'}, {name: 'Jamie Young'}, {name: 'Jane Cane'}, {name: 'Jane Wilde'}, {name: 'Janet Mason'}, {name: 'Janice Griffith'}, {name: 'Jasmine Grey'}, {name: 'Jasmine Jae'}, {name: 'Jasmine Vega'}, {name: 'Jasmine Webb'}, {name: 'Jason Luv'}, {name: 'Jax Slayher'}, {name: 'Jay Bank'}, {name: 'Jayden James'}, {name: 'Jaye Summers'}, {name: 'Jazmin Luv'}, {name: 'Jenna Haze'}, {name: 'Jenna Jameson'}, {name: 'Jennifer White'}, {name: 'Jess Ryan'}, {name: 'Jessa Rhodes'}, {name: 'Jesse Jane'}, {name: 'Jessica Jaymes'}, {name: 'Jessica Robbin'}, {name: 'Jessie Rogers'}, {name: 'Jessie Saint'}, {name: 'Jewelz Blu'}, {name: 'Jia Lissa'}, {name: 'Jill Kassidy'}, {name: 'Jillian Janson'}, {name: 'Joanna Angel'}, {name: 'Jodi West'}, {name: 'Johnny Castle'}, {name: 'Johnny Sins'}, {name: 'Jolee Love'}, {name: 'Jordi El Nino Polla'}, {name: 'Joseline Kelly'}, {name: 'Josephine Jackson'}, {name: 'Joslyn James'}, {name: 'Joslyn Jane'}, {name: 'Josy Black'}, {name: 'Juan El Caballo Loco'}, {name: 'Jules Jordan'}, {name: 'Julia Ann'}, {name: 'Julianna Vega'}, {name: 'Julie Cash'}, {name: 'Julie Kay'}, {name: 'JUNE LIU'}, {name: 'Just Lucy'}, {name: 'Jynx Maze'}, {name: 'Kaden Kole'}, {name: 'Kagney Linn Karter'}, {name: 'Kali Roses'}, {name: 'Kalina Ryu'}, {name: 'Karen Fisher'}, {name: 'Karissa Kane'}, {name: 'Karla Kush'}, {name: 'Karlee Grey'}, {name: 'Karma Rx'}, {name: 'Karmen Karma'}, {name: 'Katana'}, {name: 'Katana Kombat'}, {name: 'Kate Truu'}, {name: 'Katerina Hartlova'}, {name: 'Katie Banks'}, {name: 'Katie Cummings'}, {name: 'Katie Kush'}, {name: 'Katie Morgan'}, {name: 'Katrin Tequila'}, {name: 'Katrina Jade'}, {name: 'Katrina Moreno'}, {name: 'Katsuni'}, {name: 'Katty West'}, {name: 'Katy Rose'}, {name: 'Katya Clover'}, {name: 'Katya Rodriguez'}, {name: 'Kawaii Girl'}, {name: 'Kay Carter'}, {name: 'Kayden Kross'}, {name: 'Kayla Kayden'}, {name: 'Kayley Gunner'}, {name: 'Keira Croft'}, {name: 'Keiran Lee'}, {name: 'Keisha Grey'}, {name: 'Kelly Divine'}, {name: 'Kelsi Monroe'}, {name: 'Kendall Woods'}, {name: 'Kendra Lust'}, {name: 'Kendra Spade'}, {name: 'Kendra Sunderland'}, {name: 'Kenna James'}, {name: 'Kennedy Leigh'}, {name: 'Kenzie Anne'}, {name: 'Kenzie Madison'}, {name: 'Kenzie Reeves'}, {name: 'Kenzie Taylor'}, {name: 'Keri Love'}, {name: 'Kesha Ortega'}, {name: 'Khloe Kapri'}, {name: 'Kianna Dior'}, {name: 'Kiara Cole'}, {name: 'Kiara Lord'}, {name: 'Kiara Mia'}, {name: 'Kiki Minaj'}, {name: 'Kim Kardashian'}, {name: 'Kimber Lee'}, {name: 'Kimber Veils'}, {name: 'Kimmy Granger'}, {name: 'Kimmy Kimm'}, {name: 'King Nasir'}, {name: 'Kira Noir'}, {name: 'Kira Queen'}, {name: 'Kissa Sins'}, {name: 'Kit Mercer'}, {name: 'Kleio Valentien'}, {name: 'Korina Kova'}, {name: 'Krissy Lynn'}, {name: 'Kristen Scott'}, {name: 'Kristina Sweet'}, {name: 'Krystal Boyd'}, {name: 'Krystal Swift'}, {name: 'Kyle Balls WCA'}, {name: 'Kyle Mason'}, {name: 'Kyler Quinn'}, {name: 'Kylie Page'}, {name: 'Kylie Quinn'}, {name: 'Kylie Rocket'}, {name: 'Lacy Lennon'}, {name: 'Lady Dee'}, {name: 'Lady Fyre'}, {name: 'Lady Sonia'}, {name: 'Lala Ivey'}, {name: 'Lana Rhoades'}, {name: 'Lana Roy'}, {name: 'Lance Hart'}, {name: 'Laney Grey'}, {name: 'Lara Croft'}, {name: 'Lara Cumkitten'}, {name: 'Larkin Love'}, {name: 'LaSirena'}, {name: 'Lauren Phillips'}, {name: 'Layla London'}, {name: 'Layla Love'}, {name: 'Laz Fyre'}, {name: 'Leah Gotti'}, {name: 'Leigh Raven'}, {name: 'Leilani Leeane'}, {name: 'Leina Sex'}, {name: 'Lela Star'}, {name: 'Lelu Love'}, {name: 'Lena Paul'}, {name: 'Lena Reif'}, {name: 'Lena The Plug'}, {name: 'Leolulu'}, {name: 'Lex Steele'}, {name: 'Lexi Belle'}, {name: 'Lexi Dona'}, {name: 'Lexi Lore'}, {name: 'Lexi Love'}, {name: 'Lexi Luna'}, {name: 'Lia Louise'}, {name: 'Lil D'}, {name: 'Lilly Hall'}, {name: 'Lilu Moon'}, {name: 'Lily Adams'}, {name: 'Lily Lane'}, {name: 'Lily Larimar'}, {name: 'Lily Lou'}, {name: 'Lily Love'}, {name: 'Lily Rader'}, {name: 'Lina Luxa'}, {name: 'Lindsey Love'}, {name: 'Lisa Ann'}, {name: 'Lisa Sparxxx'}, {name: 'Little Caprice'}, {name: 'Liv Revamped'}, {name: 'Liya Silver'}, {name: 'Liz Jordan'}, {name: 'Liza Del Sierra'}, {name: 'Liza Rowe'}, {name: 'Lola Fae'}, {name: 'Lola Myluv'}, {name: 'Lola Taylor'}, {name: 'London Keyes'}, {name: 'London River'}, {name: 'Lou Nesbit'}, {name: 'Loupan'}, {name: 'Lucas Frost'}, {name: 'Lucie Wilde'}, {name: 'Lucy Cat'}, {name: 'Lucy Doll'}, {name: 'Lucy Li'}, {name: 'Lulu Chu'}, {name: 'Luna Love'}, {name: 'Luna Rival'}, {name: 'Luna Star'}, {name: 'Mackenzie Mace'}, {name: 'Macy Meadows'}, {name: 'Maddy May'}, {name: 'Maddy Oreilly'}, {name: 'Madeincanarias'}, {name: 'Madison Ivy'}, {name: 'Madison Morgan'}, {name: 'Maggie Green'}, {name: 'Maitland Ward'}, {name: 'Malena La Pugliese'}, {name: 'Malena Morgan'}, {name: 'Mandingo'}, {name: 'Mandy Flores'}, {name: 'Mandy Muse'}, {name: 'Manuel Ferrara'}, {name: 'Maria Ozawa'}, {name: 'Marica Hase'}, {name: 'Marilyn Sugar'}, {name: 'Marina Maya'}, {name: 'Mark Rockwell'}, {name: 'Markus Dupree'}, {name: 'Marley Brinx'}, {name: 'Marry Queen'}, {name: 'Marta La Croft'}, {name: 'Martina Smeraldi'}, {name: 'Maru Karv'}, {name: 'Mary Moody'}, {name: 'Mary Rock'}, {name: 'Maryana Rose'}, {name: 'Maserati'}, {name: 'Masha Yang'}, {name: 'Max Felicitas'}, {name: 'Maximo Garcia'}, {name: 'May Thai'}, {name: 'Maya Bijou'}, {name: 'Maya Farrell'}, {name: 'Mea Melone'}, {name: 'Meana Wolf'}, {name: 'Megan Rain'}, {name: 'Megan Sage'}, {name: 'Melanie Hicks'}, {name: 'Melissa Moore'}, {name: 'Melody Marks'}, {name: 'Mia Bandini'}, {name: 'Mia Julia'}, {name: 'Mia Khalifa'}, {name: 'Mia Malkova'}, {name: 'Mia Marin'}, {name: 'Mia Melano'}, {name: 'Michael Masters'}, {name: 'Michael Vegas'}, {name: 'Michaela Isizzu'}, {name: 'Michele James'}, {name: 'Michelle Anderson'}, {name: 'Mike Adriano'}, {name: 'Mila Azul'}, {name: 'Mindi Mink'}, {name: 'Misha Cross'}, {name: 'Misha Maver'}, {name: 'Miss Banana'}, {name: 'Miss Pasion'}, {name: 'Miss Raquel'}, {name: 'Mistress T'}, {name: 'Misty Stone'}, {name: 'MJ Fresh'}, {name: 'Molly Jane'}, {name: 'Molly Stewart'}, {name: 'Mona Azar'}, {name: 'Mona Wales'}, {name: 'Monique Alexander'}, {name: 'Morgan Lee'}, {name: 'Moriah Mills'}, {name: 'Ms London'}, {name: 'MyKinkyDope'}, {name: 'MySweetApple'}, {name: 'Mz Dani'}, {name: 'Nacho Vidal'}, {name: 'Nadia Ali'}, {name: 'Nala Brooks'}, {name: 'Nancy A'}, {name: 'Naomi Russell'}, {name: 'Naomi Swann'}, {name: 'Naomi Woods'}, {name: 'Natalia Queen'}, {name: 'Natalia Starr'}, {name: 'Natalie Knight'}, {name: 'Natalie Lust'}, {name: 'Natalie Mars'}, {name: 'Natasha Nice'}, {name: 'Nathaly Cherie'}, {name: 'Nekane'}, {name: 'Nia Nacci'}, {name: 'Nickey Huntsman'}, {name: 'Nicole Aniston'}, {name: 'Nicolette Shea'}, {name: 'Nikita Bellucci'}, {name: 'Nikki Benz'}, {name: 'Nikki Brooks'}, {name: 'Nikki Hearts'}, {name: 'Niks Indian'}, {name: 'Nina Elle'}, {name: 'Nina Hartley'}, {name: 'Nina Kayy'}, {name: 'Nina North'}, {name: 'Noelle Easton'}, {name: 'Nyomi Banxxx'}, {name: 'Olive Glass'}, {name: 'Olivia Austin'}, {name: 'Osa Lovely'}, {name: 'Owen Gray'}, {name: 'Paige Owens'}, {name: 'Paige Turnah'}, {name: 'Paola Hard'}, {name: 'Payton Preslee'}, {name: 'Penny Barber'}, {name: 'Penny Pax'}, {name: 'Peta Jensen'}, {name: 'Phoenix Marie'}, {name: 'Pinky'}, {name: 'Piper Perri'}, {name: 'Polly Pons'}, {name: 'Prince Yahshua'}, {name: 'Princess Leia'}, {name: 'Priscilla Salerno'}, {name: 'Pristine Edge'}, {name: 'Priya Rai'}, {name: 'Proxy Paige'}, {name: 'Queen Rogue'}, {name: 'Rachael Cavalli'}, {name: 'Rachel Rivers'}, {name: 'Rachel Roxxx'}, {name: 'Rachel Starr'}, {name: 'Rae Lil Black'}, {name: 'Rahyndee James'}, {name: 'Ramon Nomar'}, {name: 'Raylene'}, {name: 'Reagan Foxx'}, {name: 'Rebeca Linares'}, {name: 'Rebecca More'}, {name: 'Rebecca Volpetti'}, {name: 'Rebel Lynn'}, {name: 'Red Fox'}, {name: 'Reena Sky'}, {name: 'Remy Lacroix'}, {name: 'Reya Sunshine'}, {name: 'Richelle Ryan'}, {name: 'Ricky Johnson'}, {name: 'Rico Strong'}, {name: 'Riley Nixon'}, {name: 'Riley Reid'}, {name: 'Riley Star'}, {name: 'Rocco Siffredi'}, {name: 'Rocky Emerson'}, {name: 'Romi Rain'}, {name: 'Rosalyn Sphinx'}, {name: 'Rose Monroe'}, {name: 'Ryan Conner'}, {name: 'Ryan Keely'}, {name: 'Ryan Ryans'}, {name: 'Ryan Smiles'}, {name: 'Sabrina Sabrok'}, {name: 'Saffron Bacchus'}, {name: 'Samantha Saint'}, {name: 'Sara Blonde'}, {name: 'Sara Jay'}, {name: 'Sara Luvv'}, {name: 'Sarah Banks'}, {name: 'Sarah Jessie'}, {name: 'Sarah Vandella'}, {name: 'Sasha Foxxx'}, {name: 'Sasha Grey'}, {name: 'Sasha Rose'}, {name: 'Savannah Bond'}, {name: 'Savannah Sixx'}, {name: 'Saya Karim'}, {name: 'Scarlett Bloom'}, {name: 'Scarlett Jones'}, {name: 'Scarlit Scandal'}, {name: 'Sean Lawless'}, {name: 'Sensual Jane'}, {name: 'September Reign'}, {name: 'Serena Santos'}, {name: 'Shalina Devine'}, {name: 'Shane Diesel'}, {name: 'Sharinami'}, {name: 'Sharon Lee'}, {name: 'Sheena Ryder'}, {name: 'Sheila Ortega'}, {name: 'Shyla Stylez'}, {name: 'Silvia Dellai'}, {name: 'Silvia Saige'}, {name: 'Sinn Sage'}, {name: 'Siri'}, {name: 'Skin Diamond'}, {name: 'Skye Blue'}, {name: 'Skyla Novea'}, {name: 'Skylar Snow'}, {name: 'Skylar Valentine'}, {name: 'Skylar Vox'}, {name: 'Small Hands'}, {name: 'Sofi Ryan'}, {name: 'Sofia Lee'}, {name: 'Sofia Rose'}, {name: 'Sofie Marie'}, {name: 'Sofie Reyez'}, {name: 'Sophia Leone'}, {name: 'Sophie Dee'}, {name: 'Stacey Saran'}, {name: 'Stacy Cruz'}, {name: 'Stefany Kyler'}, {name: 'Stella Barey'}, {name: 'Stella Cox'}, {name: 'Stoya'}, {name: 'Summer Hart'}, {name: 'Sunny Leone'}, {name: 'Susi Gala'}, {name: 'Sybil'}, {name: 'Sybil Stallone'}, {name: 'Sydney Cole'}, {name: 'Syren De Mer'}, {name: 'Tana Lea'}, {name: 'Tanya Tate'}, {name: 'Taylor Sands'}, {name: 'Teanna Trump'}, {name: 'Tera Patrick'}, {name: 'Tessa Fowler'}, {name: 'Tia Cyrus'}, {name: 'Tiffany Leiddi'}, {name: 'Tiffany Tatum'}, {name: 'Tiffany Watson'}, {name: 'Tina Kay'}, {name: 'Tiny Texie'}, {name: 'Tony Profane'}, {name: 'Tori Black'}, {name: 'Tory Lane'}, {name: 'Troy Francisco'}, {name: 'Tru Kait'}, {name: 'Tyler Nixon'}, {name: 'Uma Jolie'}, {name: 'Undercoversluts'}, {name: 'Valentina Jewels'}, {name: 'Valentina Nappi'}, {name: 'Valerica Steele'}, {name: 'Valerie Kay'}, {name: 'Vanessa Cage'}, {name: 'Vanessa Decker'}, {name: 'Vanessa Sky'}, {name: 'Vanessa Vega'}, {name: 'Vanessa Veracruz'}, {name: 'Vanna Bardot'}, {name: 'Venus Afrodita'}, {name: 'Veronica Avluv'}, {name: 'Veronica Leal'}, {name: 'Veronica Rodriguez'}, {name: 'Vicki Chase'}, {name: 'Victoria Cakes'}, {name: 'Victoria June'}, {name: 'Vienna Black'}, {name: 'Vina Sky'}, {name: 'Violet Myers'}, {name: 'Violet Starr'}, {name: 'Virgo Peridot'}, {name: 'Vivian Taylor'}, {name: 'Whitney Westgate'}, {name: 'Whitney Wright'}, {name: 'Winter Jade'}, {name: 'Xander Corvus'}, {name: 'Xev Bellringer'}, {name: 'Yhivi'}, {name: 'Yua Mikami'}, {name: 'Yui Hatano'}, {name: 'Zaawaadi'}, {name: 'Zoe Bloom'}, {name: 'Zoe Doll'}, {name: 'Zoey Holloway'},
    ],
    searchingNames: { girlsFormatted: '', girlsOriginal: [] },
}

export const setSearchingGirls = (names: any) => (dispatch: AppDispatch) => {
    try {
        dispatch(girlsSlice.actions.setSearchingGirlsReducer(names))

    }   catch (e) {
        alert('error')
    }
}

export const girlsSlice = createSlice({
    name: 'girls',
    initialState,
    reducers: {
        setSearchingGirlsReducer (state, action) {
            state.searchingNames = action.payload;
        }
    },
    extraReducers: {

    }
})