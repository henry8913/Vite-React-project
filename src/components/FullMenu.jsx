
import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Divider,
  Tabs,
  Tab,
  Paper
} from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function FullMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const menuCategories = [
    { id: 'antipasti', label: 'Antipasti' },
    { id: 'primi', label: 'Primi Piatti' },
    { id: 'secondi', label: 'Secondi Piatti' },
    { id: 'pizze', label: 'Pizze' },
    { id: 'contorni', label: 'Contorni' },
    { id: 'dolci', label: 'Dolci' },
    { id: 'bevande', label: 'Bevande' }
  ];

  // Utilizziamo collegamenti a immagini online pertinenti
  const menuItems = {
    antipasti: [
      {
        name: 'Bruschetta al Pomodoro',
        description: 'Fette di pane tostato con pomodori freschi, aglio, basilico e olio extra vergine d\'oliva',
        price: '€6',
        image: 'https://plus.unsplash.com/premium_photo-1677686707466-2c86b174d072?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'Insalata Caprese',
        description: 'Pomodori, mozzarella di bufala, basilico, olio extra vergine d\'oliva e origano',
        price: '€10',
        image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'Carpaccio di Manzo',
        description: 'Fettine sottili di manzo crudo con rucola, parmigiano, limone e olio d\'oliva',
        price: '€12',
        image: 'https://images.unsplash.com/photo-1514729391575-b0ebbf0b3639?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'Antipasto Misto',
        description: 'Selezione di salumi italiani, formaggi, olive e verdure marinate',
        price: '€14',
        image: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ],
    primi: [
      {
        name: 'Spaghetti alla Carbonara',
        description: 'Pasta fresca con uova, guanciale, pepe nero e pecorino romano',
        price: '€14',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Risotto ai Funghi Porcini',
        description: 'Riso carnaroli con funghi porcini, cipolla, vino bianco e parmigiano',
        price: '€16',
        image: 'https://plus.unsplash.com/premium_photo-1695030933912-5470602c4f15?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'Lasagna alla Bolognese',
        description: 'Strati di pasta fresca con ragù di carne, besciamella e parmigiano',
        price: '€15',
        image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=800&auto=format&fit=crop'
      }
    ],
    secondi: [
      {
        name: 'Filetto di Manzo',
        description: 'Filetto di manzo alla griglia con riduzione di vino rosso e patate arrosto',
        price: '€28',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Bistecca alla Fiorentina',
        description: 'T-bone di manzo alla griglia con rosmarino e olio d\'oliva (min. 2 persone)',
        price: '€58',
        image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Branzino al Forno',
        description: 'Branzino fresco al forno con patate, pomodorini, olive e erbe aromatiche',
        price: '€26',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop'
      }
    ],
    pizze: [
      {
        name: 'Pizza Margherita',
        description: 'Pomodoro San Marzano, mozzarella di bufala, basilico fresco e olio d\'oliva',
        price: '€12',
        image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Pizza Diavola',
        description: 'Pomodoro, mozzarella e salame piccante',
        price: '€14',
        image: 'https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'Pizza Quattro Formaggi',
        description: 'Mozzarella, gorgonzola, fontina e parmigiano',
        price: '€15',
        image: 'https://plus.unsplash.com/premium_photo-1672198597143-45a4b5f064c9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ],
    contorni: [
      {
        name: 'Patate al Rosmarino',
        description: 'Patate al forno con rosmarino, aglio e olio d\'oliva',
        price: '€6',
        image: 'https://plus.unsplash.com/premium_photo-1669559809077-52f963b1ea7f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'Verdure Grigliate',
        description: 'Selezione di verdure di stagione alla griglia con olio e aceto balsamico',
        price: '€8',
        image: 'https://images.unsplash.com/photo-1625944227313-4f7f68e6b3fa?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'Insalata Mista',
        description: 'Insalata mista di stagione con pomodorini e carote',
        price: '€5',
        image: 'https://images.unsplash.com/photo-1644172971013-b3dfee71fa0d?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ],
    dolci: [
      {
        name: 'Tiramisù',
        description: 'Dolce tradizionale con mascarpone, caffè, savoiardi e cacao',
        price: '€8',
        image: 'https://images.unsplash.com/photo-1586040456399-50595fb77ecd?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'Panna Cotta',
        description: 'Crema cotta con salsa ai frutti di bosco',
        price: '€7',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop'
      }
    ],
    bevande: [
      {
        name: 'Vino Rosso della Casa',
        description: 'Sangiovese biologico (bottiglia)',
        price: '€22',
        image: 'https://plus.unsplash.com/premium_photo-1678060795248-bff75855c293?q=80&w=3146&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'Vino Bianco della Casa',
        description: 'Pinot Grigio fresco e leggero (bottiglia)',
        price: '€20',
        image: 'https://images.unsplash.com/photo-1606767208159-1a5fb0a87841?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'Acqua Minerale',
        description: 'Naturale o frizzante (1L)',
        price: '€3',
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=800&auto=format&fit=crop'
      }
    ]
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ 
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            position: 'relative',
            display: 'inline-block',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '40%',
              height: '3px',
              backgroundColor: 'primary.main',
              bottom: '-10px',
              left: '30%'
            }
          }}>
            Menu Completo
          </Typography>
          <Typography variant="subtitle1" sx={{ maxWidth: '700px', mx: 'auto', mt: 4, color: 'text.secondary' }}>
            La nostra cucina propone piatti della tradizione italiana, preparati con ingredienti freschi e di prima qualità. 
            Tutti i nostri piatti sono preparati al momento e possono subire variazioni in base alla stagionalità dei prodotti.
          </Typography>
        </Box>
        
        <Paper elevation={0} sx={{ mb: 5, borderRadius: 2, overflow: 'hidden' }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            variant="scrollable"
            scrollButtons="auto"
            aria-label="categorie menu"
            sx={{ 
              borderBottom: 1, 
              borderColor: 'divider',
              '.MuiTabs-indicator': {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3
              }
            }}
          >
            {menuCategories.map((category, index) => (
              <Tab 
                key={index} 
                id={`menu-tab-${index}`}
                aria-controls={`menu-tabpanel-${index}`}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <RestaurantMenuIcon sx={{ mr: 1, fontSize: 20 }} />
                    {category.label}
                  </Box>
                } 
                sx={{ 
                  py: 2,
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '0.95rem'
                }}
              />
            ))}
          </Tabs>
        </Paper>

        {menuCategories.map((category, index) => (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`menu-tabpanel-${index}`}
            aria-labelledby={`menu-tab-${index}`}
            key={category.id}
          >
            {value === index && menuItems[category.id] && (
              <Grid container spacing={3}>
                {menuItems[category.id].map((item, itemIndex) => (
                  <Grid item xs={12} sm={6} md={4} key={itemIndex}>
                    <Card elevation={0} sx={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      height: '100%',
                      borderRadius: 2,
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
                      }
                    }}>
                      <Box 
                        sx={{ 
                          pt: '56.25%', // Aspect ratio 16:9
                          position: 'relative',
                          bgcolor: 'grey.100'
                        }}
                      >
                        <img src={item.image} alt={item.name} style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}/>
                      </Box>
                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {item.description}
                        </Typography>
                        <Typography variant="h6" color="primary.main" fontWeight="bold">
                          {item.price}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </div>
        ))}
        
        <Divider sx={{ my: 6 }} />
        
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            I prezzi possono subire variazioni. Per allergie e intolleranze, chiedere informazioni al personale.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
