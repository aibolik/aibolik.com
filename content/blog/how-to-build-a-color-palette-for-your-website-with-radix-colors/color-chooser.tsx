import * as React from 'react';
import styled from 'styled-components';

const tomatoDark = {
  c1: 'hsl(10, 23.0%, 9.4%)',
  c2: 'hsl(9, 44.8%, 11.4%)',
  c3: 'hsl(8, 52.0%, 15.3%)',
  c4: 'hsl(7, 56.3%, 18.0%)',
  c5: 'hsl(7, 60.1%, 20.6%)',
  c6: 'hsl(8, 64.8%, 24.0%)',
  c7: 'hsl(8, 71.2%, 29.1%)',
  c8: 'hsl(10, 80.2%, 35.7%)',
  c9: 'hsl(10, 78.0%, 54.0%)',
  c10: 'hsl(10, 81.7%, 59.0%)',
  c11: 'hsl(10, 85.0%, 62.8%)',
  c12: 'hsl(10, 89.0%, 96.0%)',
};

const redDark = {
  c1: 'hsl(353, 23.0%, 9.8%)',
  c2: 'hsl(357, 34.4%, 12.0%)',
  c3: 'hsl(356, 43.4%, 16.4%)',
  c4: 'hsl(356, 47.6%, 19.2%)',
  c5: 'hsl(356, 51.1%, 21.9%)',
  c6: 'hsl(356, 55.2%, 25.9%)',
  c7: 'hsl(357, 60.2%, 31.8%)',
  c8: 'hsl(358, 65.0%, 40.4%)',
  c9: 'hsl(358, 75.0%, 59.0%)',
  c10: 'hsl(358, 85.3%, 64.0%)',
  c11: 'hsl(358, 100%, 69.5%)',
  c12: 'hsl(351, 89.0%, 96.0%)',
};

const crimsonDark = {
  c1: 'hsl(335, 20.0%, 9.6%)',
  c2: 'hsl(335, 32.2%, 11.6%)',
  c3: 'hsl(335, 42.5%, 16.5%)',
  c4: 'hsl(335, 47.2%, 19.3%)',
  c5: 'hsl(335, 50.9%, 21.8%)',
  c6: 'hsl(335, 55.7%, 25.3%)',
  c7: 'hsl(336, 62.9%, 30.8%)',
  c8: 'hsl(336, 74.9%, 39.0%)',
  c9: 'hsl(336, 80.0%, 57.8%)',
  c10: 'hsl(339, 84.1%, 62.6%)',
  c11: 'hsl(341, 90.0%, 67.3%)',
  c12: 'hsl(332, 87.0%, 96.0%)',
};

const pinkDark = {
  c1: '#1f121b',
  c2: '#271421',
  c3: '#3a182f',
  c4: '#451a37',
  c5: '#501b3f',
  c6: '#601d48',
  c7: '#7a1d5a',
  c8: '#a71873',
  c9: '#d6409f',
  c10: '#e34ba9',
  c11: '#f65cb6',
  c12: '#feebf7',
};

const plumDark = {
  c1: '#1d131d',
  c2: '#251425',
  c3: '#341a34',
  c4: '#3e1d40',
  c5: '#48214b',
  c6: '#542658',
  c7: '#692d6f',
  c8: '#883894',
  c9: '#ab4aba',
  c10: '#bd54c6',
  c11: '#d864d8',
  c12: '#fbecfc',
};

const purpleDark = {
  c1: '#1b141d',
  c2: '#221527',
  c3: '#301a3a',
  c4: '#3a1e48',
  c5: '#432155',
  c6: '#4e2667',
  c7: '#5f2d84',
  c8: '#7938b2',
  c9: '#8e4ec6',
  c10: '#9d5bd2',
  c11: '#bf7af0',
  c12: '#f7ecfc',
};

const violetDark = {
  c1: '#17151f',
  c2: '#1c172b',
  c3: '#251e40',
  c4: '#2c2250',
  c5: '#32275f',
  c6: '#392c72',
  c7: '#443592',
  c8: '#5842c3',
  c9: '#6e56cf',
  c10: '#7c66dc',
  c11: '#9e8cfc',
  c12: '#f1eefe',
};

const indigoDark = {
  c1: '#131620',
  c2: '#15192d',
  c3: '#192140',
  c4: '#1c274f',
  c5: '#1f2c5c',
  c6: '#22346e',
  c7: '#273e89',
  c8: '#2f4eb2',
  c9: '#3e63dd',
  c10: '#5373e7',
  c11: '#849dff',
  c12: '#eef1fd',
};

const blueDark = {
  c1: '#0f1720',
  c2: '#0f1b2d',
  c3: '#10243e',
  c4: '#102a4c',
  c5: '#0f3058',
  c6: '#0d3868',
  c7: '#0a4481',
  c8: '#0954a5',
  c9: '#0091ff',
  c10: '#369eff',
  c11: '#52a9ff',
  c12: '#eaf6ff',
};

const cyanDark = {
  c1: '#07191d',
  c2: '#061e24',
  c3: '#072830',
  c4: '#07303b',
  c5: '#073844',
  c6: '#064150',
  c7: '#045063',
  c8: '#00647d',
  c9: '#05a2c2',
  c10: '#00b1cc',
  c11: '#00c2d7',
  c12: '#e1f8fa',
};

const tealDark = {
  c1: '#091915',
  c2: '#04201b',
  c3: '#062923',
  c4: '#07312b',
  c5: '#083932',
  c6: '#09443c',
  c7: '#0b544a',
  c8: '#0c6d62',
  c9: '#12a594',
  c10: '#10b3a3',
  c11: '#0ac5b3',
  c12: '#e1faf4',
};

const greenDark = {
  c1: '#0d1912',
  c2: '#0c1f17',
  c3: '#0f291e',
  c4: '#113123',
  c5: '#133929',
  c6: '#164430',
  c7: '#1b543a',
  c8: '#236e4a',
  c9: '#30a46c',
  c10: '#3cb179',
  c11: '#4cc38a',
  c12: '#e5fbeb',
};

const grassDark = {
  c1: '#0d1912',
  c2: '#0f1e13',
  c3: '#132819',
  c4: '#16301d',
  c5: '#193921',
  c6: '#1d4427',
  c7: '#245530',
  c8: '#2f6e3b',
  c9: '#46a758',
  c10: '#55b467',
  c11: '#63c174',
  c12: '#e5fbeb',
};

const orangeDark = {
  c1: '#1f1206',
  c2: '#2b1400',
  c3: '#391a03',
  c4: '#441f04',
  c5: '#4f2305',
  c6: '#5f2a06',
  c7: '#763205',
  c8: '#943e00',
  c9: '#f76808',
  c10: '#ff802b',
  c11: '#ff8b3e',
  c12: '#feeadd',
};

const brownDark = {
  c1: '#191513',
  c2: '#221813',
  c3: '#2e201a',
  c4: '#36261e',
  c5: '#3e2c22',
  c6: '#493528',
  c7: '#5c4332',
  c8: '#775940',
  c9: '#ad7f58',
  c10: '#bd8b60',
  c11: '#dba16e',
  c12: '#faf0e5',
};

const skyDark = {
  c1: '#0c1820',
  c2: '#071d2a',
  c3: '#082636',
  c4: '#082d41',
  c5: '#08354c',
  c6: '#083e59',
  c7: '#064b6b',
  c8: '#005d85',
  c9: '#68ddfd',
  c10: '#8ae8ff',
  c11: '#2ec8ee',
  c12: '#eaf8ff',
};

const mintDark = {
  c1: '#081917',
  c2: '#05201e',
  c3: '#052926',
  c4: '#04312c',
  c5: '#033a34',
  c6: '#01453d',
  c7: '#00564a',
  c8: '#006d5b',
  c9: '#70e1c8',
  c10: '#95f3d9',
  c11: '#25d0ab',
  c12: '#e7fcf7',
};

const limeDark = {
  c1: '#141807',
  c2: '#181d08',
  c3: '#1e260d',
  c4: '#252e0f',
  c5: '#2b3711',
  c6: '#344213',
  c7: '#415215',
  c8: '#536716',
  c9: '#99d52a',
  c10: '#c4f042',
  c11: '#87be22',
  c12: '#effbdd',
};

const yellowDark = {
  c1: '#1c1500',
  c2: '#221a00',
  c3: '#2c2100',
  c4: '#352800',
  c5: '#3e3000',
  c6: '#493c00',
  c7: '#594a05',
  c8: '#705e00',
  c9: '#f5d90a',
  c10: '#ffef5c',
  c11: '#f0c000',
  c12: '#fffad1',
};

const amberDark = {
  c1: '#1f1300',
  c2: '#271700',
  c3: '#341c00',
  c4: '#3f2200',
  c5: '#4a2900',
  c6: '#573300',
  c7: '#693f05',
  c8: '#824e00',
  c9: '#ffb224',
  c10: '#ffcb47',
  c11: '#f1a10d',
  c12: '#fef3dd',
};

const grayDark = {
  c1: '#161616',
  c2: '#1c1c1c',
  c3: '#232323',
  c4: '#282828',
  c5: '#2e2e2e',
  c6: '#343434',
  c7: '#3e3e3e',
  c8: '#505050',
  c9: '#707070',
  c10: '#7e7e7e',
  c11: '#a0a0a0',
  c12: '#ededed',
};

const mauveDark = {
  c1: '#161618',
  c2: '#1c1c1f',
  c3: '#232326',
  c4: '#28282c',
  c5: '#2e2e32',
  c6: '#34343a',
  c7: '#3e3e44',
  c8: '#504f57',
  c9: '#706f78',
  c10: '#7e7d86',
  c11: '#a09fa6',
  c12: '#ededef',
};

const slateDark = {
  c1: '#151718',
  c2: '#1a1d1e',
  c3: '#202425',
  c4: '#26292b',
  c5: '#2b2f31',
  c6: '#313538',
  c7: '#3a3f42',
  c8: '#4c5155',
  c9: '#697177',
  c10: '#787f85',
  c11: '#9ba1a6',
  c12: '#ecedee',
};

const sageDark = {
  c1: '#141716',
  c2: '#191d1b',
  c3: '#1f2421',
  c4: '#252a27',
  c5: '#2a2f2c',
  c6: '#303633',
  c7: '#393f3c',
  c8: '#4a524e',
  c9: '#66736d',
  c10: '#75817b',
  c11: '#99a29e',
  c12: '#eceeed',
};

const oliveDark = {
  c1: '#151715',
  c2: '#1a1d19',
  c3: '#20241f',
  c4: '#262925',
  c5: '#2b2f2a',
  c6: '#313530',
  c7: '#3b3f3a',
  c8: '#4c514b',
  c9: '#687366',
  c10: '#778175',
  c11: '#9aa299',
  c12: '#eceeec',
};

const sandDark = {
  c1: '#161615',
  c2: '#1c1c1a',
  c3: '#232320',
  c4: '#282826',
  c5: '#2e2e2b',
  c6: '#353431',
  c7: '#3e3e3a',
  c8: '#51504b',
  c9: '#717069',
  c10: '#7f7e77',
  c11: '#a1a09a',
  c12: '#ededec',
}

const COLORS = {
  tomato: tomatoDark,
  red: redDark,
  crimson: crimsonDark,
  pink: pinkDark,
  plum: plumDark,
  purple: purpleDark,
  violet: violetDark,
  indigo: indigoDark,
  blue: blueDark,
  cyan: cyanDark,
  teal: tealDark,
  green: greenDark,
  grass: grassDark,
  orange: orangeDark,
  brown: brownDark,
  sky: skyDark,
  mint: mintDark,
  lime: limeDark,
  yellow: yellowDark,
  amber: amberDark,
  gray: grayDark,
  mauve: mauveDark,
  sage: sageDark,
  olive: oliveDark,
  sand: sandDark,
};

const COLOR_NAMES = Object.keys(COLORS);
const W_COLORS_GRID = [
  COLOR_NAMES.slice(0, 5),
  COLOR_NAMES.slice(5, 10),
  COLOR_NAMES.slice(10, 15),
];
const B_COLORS = COLOR_NAMES.slice(15, 20);
const GRAYSCALE_COLORS = COLOR_NAMES.slice(20);

const Row: React.FC = ({ children }) => {
  return (
    <div style={{
      display: 'flex',
      gridGap: '2px',
      marginBottom: '2px',
    }}>
      {children}
    </div>
  )
};

const Tile = styled.button`
  background: ${(props) => COLORS[props.color].c10};
  color: ${(props) => props.isDark ? 'black' : COLORS[props.color].c12};
  flex: 1;
  min-height: 54px;
  line-height: 54px;
  text-align: center;
  border: none;
  cursor: pointer;

  transition: transform .3s;

  :hover {
    transform: scale(0.9);
  }
`;

const Button = styled.button`
  background: ${(props) => COLORS[props.color].c3};
  padding: 8px 24px;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;

  :hover {
    background: ${(props) => COLORS[props.color].c4};
  }
`;

const Text = styled.div`
  color: ${(props) => props.high ? COLORS[props.color].c12 : COLORS[props.color].c11};
`;

const AlertBox = styled.div`
  flex: 1 0 100%;
  background: ${(props) => COLORS[props.color].c2};
  border: 3px solid ${(props) => COLORS[props.color].c3};
  border-radius: 12px;
  padding: 16px 24px;
  margin-top: 24px;
`;

const UIItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-gap: 24px;
  margin-bottom: 54px;
  flex-wrap: wrap;
`;


const ColorChooser = ({ grayscale = false }: { grayscale?: boolean }) => {
  const [color, setColor] = React.useState(grayscale ? 'gray' : 'tomato');

  return (
    <div style={{
      // display: 'grid',
    }}>

      <h4 style={{ marginBottom: '24px' }}>
        {/* @ts-ignore */}
        Choose your color. Current: <span style={{ color: COLORS[color].c10 }}>{color}</span>
      </h4>
      {grayscale ? (
        <>
          <h4>Grayscale colors</h4>
          <Row>
            {GRAYSCALE_COLORS.map((color: string) => (
              // @ts-ignore
              <Tile key={color as string} color={color} onClick={() => setColor(color)}>
                {color}
              </Tile>
            ))}
          </Row>
        </>
      ) : (
        <>
          <h4>White foreground colors</h4>
          {W_COLORS_GRID.map((row, i) => (
            <Row key={i}>
              {W_COLORS_GRID[i].map((color: string) => (
                // @ts-ignore
                <Tile key={color as string} color={color} onClick={() => setColor(color)}>
                  {color}
                </Tile>
              ))}
            </Row>
          ))}
          <h4 style={{ marginTop: '24px' }}>Black foreground colors</h4>
          <Row>
            {B_COLORS.map((color: string) => (
              // @ts-ignore
              <Tile isDark key={color as string} color={color} onClick={() => setColor(color)}>
                {color}
              </Tile>
            ))}
          </Row>
        </>)}
      <h4 style={{ margin: '24px 0' }}>
        Example of the usage
      </h4>
      <div>
        <UIItems>
          <Button color={color}>
            Button
          </Button>
          <Text color={color} high>
            High contrast text
          </Text>
          <Text color={color}>
            Low contrast text
          </Text>
          <AlertBox color={color}>
            This is a sample alert box, that you can use to grab the attention of your reader
          </AlertBox>
        </UIItems>
      </div>


    </div>
  );
}

export { ColorChooser };

