
import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Button, 
  Card, 
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  Box,
  Paper,
  Divider,
  IconButton,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Snackbar,
  Alert,
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarIcon from '@mui/icons-material/Star';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import heroImage from './assets/images/hero.jpg';
import pastaImage from './assets/images/pasta.jpg';
import pizzaImage from './assets/images/pizza.jpg';
import saladImage from './assets/images/salad.jpg';
import dessertImage from './assets/images/dessert.jpg';
import chefImage from './assets/images/chef.jpg';
import interiorImage from './assets/images/interior.jpg';
import FullMenu from './components/FullMenu';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Prenotazione inviata:', formData);
    setSnackbarOpen(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 2
    });
  };
  
  const handleMenuOpen = () => {
    setMenuOpen(true);
  };
  
  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const menuItems = [
    {
      title: "Spaghetti alla Carbonara",
      description: "Pasta fresca con uova, guanciale, pepe nero e pecorino romano",
      price: "€14",
      image: pastaImage,
      category: "Primi Piatti"
    },
    {
      title: "Pizza Margherita",
      description: "Pomodoro San Marzano, mozzarella di bufala, basilico fresco e olio d'oliva",
      price: "€12",
      image: pizzaImage,
      category: "Pizze"
    },
    {
      title: "Insalata Caprese",
      description: "Pomodori, mozzarella, basilico, olio extra vergine d'oliva e origano",
      price: "€10",
      image: saladImage,
      category: "Antipasti"
    },
    {
      title: "Tiramisù",
      description: "Dolce tradizionale con mascarpone, caffè, savoiardi e cacao",
      price: "€8",
      image: dessertImage,
      category: "Dolci"
    }
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <AppBar position="sticky" color="primary" elevation={4}>
        <Toolbar sx={{ py: { xs: 1, md: 1.5 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <RestaurantIcon sx={{ mr: 1, fontSize: { xs: 24, md: 28 } }} />
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                fontFamily: "'Playfair Display', serif"
              }}
            >
              Trattoria Bella Italia
            </Typography>
          </Box>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Button 
              color="inherit" 
              href="#menu"
              sx={{ 
                px: 2,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Menu
            </Button>
            <Button 
              color="inherit" 
              href="#about"
              sx={{ 
                px: 2,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Chi Siamo
            </Button>
            <Button 
              color="inherit" 
              href="#reservation"
              sx={{ 
                px: 2,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Prenota
            </Button>
            <Button 
              color="inherit" 
              href="#contact"
              sx={{ 
                px: 2,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Contatti
            </Button>
          </Box>
        </Toolbar>
        
        {/* Mobile Navigation */}
        <Box 
          sx={{ 
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'space-between', 
            bgcolor: 'rgba(255,255,255,0.1)',
            py: 1,
            px: 1,
            overflowX: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <Button 
            size="small" 
            color="inherit" 
            href="#menu" 
            sx={{ 
              minWidth: 'auto',
              fontSize: '0.8rem',
              px: 1.5,
              whiteSpace: 'nowrap',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
            }}
          >
            Menu
          </Button>
          <Button 
            size="small" 
            color="inherit" 
            href="#about" 
            sx={{ 
              minWidth: 'auto',
              fontSize: '0.8rem',
              px: 1.5,
              whiteSpace: 'nowrap',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
            }}
          >
            Chi Siamo
          </Button>
          <Button 
            size="small" 
            color="inherit" 
            href="#reservation" 
            sx={{ 
              minWidth: 'auto',
              fontSize: '0.8rem',
              px: 1.5,
              whiteSpace: 'nowrap',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
            }}
          >
            Prenota
          </Button>
          <Button 
            size="small" 
            color="inherit" 
            href="#contact" 
            sx={{ 
              minWidth: 'auto',
              fontSize: '0.8rem',
              px: 1.5,
              whiteSpace: 'nowrap',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
            }}
          >
            Contatti
          </Button>
        </Box>
      </AppBar>

      {/* Hero Section */}
      <Box 
        sx={{
          position: 'relative',
          height: { xs: '80vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          overflow: 'hidden',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 0
          }
        }}
      >
        <Box 
          sx={{ 
            textAlign: 'center',
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: 2,
            maxWidth: { xs: '95%', sm: '80%', md: '800px' },
            position: 'relative',
            zIndex: 1
          }}
        >
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
            Trattoria Bella Italia
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Autentica cucina italiana dal 1985
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', gap: 2, mt: 2 }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              href="#reservation"
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              Prenota un Tavolo
            </Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              size="large"
              href="#menu"
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              Scopri il Menu
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Welcome Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Benvenuti alla Trattoria Bella Italia
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Da oltre 35 anni serviamo piatti della tradizione italiana con ingredienti freschi e genuini,
            in un'atmosfera accogliente e familiare nel cuore della città.
          </Typography>
          <Divider sx={{ width: '100px', mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <RoomServiceIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <Typography variant="h6" gutterBottom>Ingredienti Freschi</Typography>
              <Typography variant="body2">
                Selezioniamo solo gli ingredienti migliori e più freschi per garantire l'autenticità dei nostri piatti.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <MenuBookIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <Typography variant="h6" gutterBottom>Ricette Tradizionali</Typography>
              <Typography variant="body2">
                Le nostre ricette sono tramandate di generazione in generazione per offrire il vero sapore dell'Italia.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <LocalBarIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <Typography variant="h6" gutterBottom>Vini Pregiati</Typography>
              <Typography variant="body2">
                La nostra cantina offre una selezione di vini italiani d'eccellenza per accompagnare ogni piatto.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Menu Section */}
      <Box id="menu" sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Il Nostro Menu
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
              Una selezione dei nostri piatti più amati
            </Typography>
            <Divider sx={{ width: '100px', mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
          </Box>

          <Grid container spacing={4}>
            {menuItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow" sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                    sx={{ objectFit: 'cover', height: { xs: '180px', md: '200px' } }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="subtitle2" color="text.secondary">
                      {item.category}
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {item.description}
                    </Typography>
                    <Typography variant="h6" color="primary" fontWeight="bold">
                      {item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large" 
              startIcon={<MenuBookIcon />}
              onClick={handleMenuOpen}
            >
              Vedi Menu Completo
            </Button>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                La Nostra Storia
              </Typography>
              <Typography variant="body1" paragraph>
                La Trattoria Bella Italia nasce nel 1985 dalla passione della famiglia Rossi 
                per la cucina tradizionale italiana. Il nostro obiettivo è sempre stato quello 
                di offrire un'esperienza autentica, con piatti preparati secondo le ricette 
                della tradizione.
              </Typography>
              <Typography variant="body1" paragraph>
                Tutti i nostri ingredienti sono selezionati con cura, privilegiando 
                prodotti locali e di stagione, per garantire la massima qualità e freschezza.
              </Typography>
              <Typography variant="body1">
                Il nostro chef, Marco Rossi, si è formato nelle migliori cucine d'Italia 
                prima di tornare a guidare il ristorante di famiglia, portando tecnica e 
                innovazione nel rispetto della tradizione.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src={chefImage}
                alt="Il nostro Chef"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={6} alignItems="center" sx={{ mt: 6 }}>
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Box 
                component="img"
                src={interiorImage}
                alt="Interno del ristorante"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Typography variant="h4" component="h2" gutterBottom>
                L'Ambiente
              </Typography>
              <Typography variant="body1" paragraph>
                La Trattoria Bella Italia offre un ambiente accogliente e familiare, 
                dove potrete gustare i nostri piatti in un'atmosfera rilassata e conviviale.
              </Typography>
              <Typography variant="body1" paragraph>
                La sala principale può ospitare fino a 60 persone, mentre la terrazza estiva 
                offre ulteriori 30 posti per cenare all'aperto nelle serate più calde.
              </Typography>
              <Typography variant="body1">
                Organizziamo anche eventi privati e cene aziendali, con menu personalizzati 
                in base alle vostre esigenze e preferenze.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Reservation Section */}
      <Box id="reservation" sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Prenota un Tavolo
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
              Garantisci il tuo posto nella nostra trattoria
            </Typography>
            <Divider sx={{ width: '100px', mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
          </Box>

          <Paper sx={{ p: { xs: 3, md: 5 } }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nome e Cognome"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Telefono"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Numero di Ospiti</InputLabel>
                    <Select
                      name="guests"
                      value={formData.guests}
                      label="Numero di Ospiti"
                      onChange={handleInputChange}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <MenuItem key={num} value={num}>{num} {num === 1 ? 'persona' : 'persone'}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Data"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Ora"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Note Speciali (allergie, occasioni speciali, etc.)"
                    name="notes"
                    multiline
                    rows={3}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    startIcon={<EventAvailableIcon />}
                  >
                    Prenota Ora
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>

      {/* Recensioni clienti */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Cosa Dicono i Nostri Clienti
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
              Le opinioni di chi ha cenato da noi
            </Typography>
            <Divider sx={{ width: '100px', mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
          </Box>
          
          <Box sx={{ position: 'relative', px: { xs: 0, md: 6 }, my: 4 }}>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {[
                {
                  name: "Marco Bianchi",
                  date: "10 Ottobre 2023",
                  review: "La carbonara migliore che abbia mai mangiato! L'atmosfera è accogliente e il personale è molto attento. Torneremo sicuramente.",
                  rating: 5
                },
                {
                  name: "Giulia Rossi",
                  date: "25 Settembre 2023",
                  review: "Ho festeggiato il mio compleanno qui e non potevo fare scelta migliore. Il cibo era eccezionale, soprattutto i dolci. Consigliato!",
                  rating: 5
                },
                {
                  name: "Luca Verdi",
                  date: "15 Agosto 2023",
                  review: "Ottimo rapporto qualità-prezzo. I piatti sono generosi e molto ben presentati. Il tiramisù è da provare assolutamente.",
                  rating: 4
                }
              ].map((review, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 6
                      }
                    }}
                  >
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                      <Box 
                        sx={{ 
                          width: 50, 
                          height: 50, 
                          borderRadius: '50%', 
                          bgcolor: 'primary.light',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '1.2rem',
                          mr: 2
                        }}
                      >
                        {review.name.charAt(0)}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {review.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {review.date}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          sx={{ 
                            color: i < review.rating ? 'primary.main' : 'grey.300',
                            fontSize: '1.2rem'
                          }} 
                        />
                      ))}
                    </Box>
                    
                    <Typography variant="body1" sx={{ flex: 1 }}>
                      "{review.review}"
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button 
              variant="outlined" 
              color="primary"
              startIcon={<StarIcon />}
              href="https://g.page/review/trattoriabellaitalia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lascia una Recensione
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact and Location */}
      <Box id="contact" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                Contatti e Orari
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PlaceIcon color="primary" sx={{ mr: 2 }} />
                  <Typography variant="body1">
                    Via Roma 123, 00100 Roma, Italia
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon color="primary" sx={{ mr: 2 }} />
                  <Typography variant="body1">
                    +39 06 1234567
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AccessTimeIcon color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      Martedì - Domenica: 12:00 - 15:00, 19:00 - 23:00
                    </Typography>
                    <Typography variant="body1">
                      Lunedì: Chiuso
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                Seguici sui Social
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton color="primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                  </svg>
                </IconButton>
                <IconButton color="primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                  </svg>
                </IconButton>
                <IconButton color="primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </IconButton>
                <IconButton color="primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z"/>
                  </svg>
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11873.747539552232!2d12.48236086977539!3d41.89520936112132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61a155278619%3A0x9806756eed03a34e!2sPantheon!5e0!3m2!1sen!2sit!4v1696123456789!5m2!1sen!2sit"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Trattoria Bella Italia
              </Typography>
              <Typography variant="body2">
                Autentica cucina italiana dal 1985. Tradizione, qualità e passione in ogni piatto.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Orari di Apertura
              </Typography>
              <Typography variant="body2" paragraph>
                Martedì - Domenica: 12:00 - 15:00, 19:00 - 23:00
              </Typography>
              <Typography variant="body2">
                Lunedì: Chiuso
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Newsletter
              </Typography>
              <Typography variant="body2" paragraph>
                Iscriviti per ricevere offerte speciali e aggiornamenti sui nostri eventi.
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <TextField
                  size="small"
                  placeholder="La tua email"
                  variant="outlined"
                  sx={{ 
                    bgcolor: 'white',
                    borderRadius: '4px 0 0 4px',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRight: 0
                    }
                  }}
                />
                <Button 
                  variant="contained" 
                  color="secondary"
                  sx={{ borderRadius: '0 4px 4px 0' }}
                >
                  Iscriviti
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="body2">
              © {new Date().getFullYear()} Trattoria Bella Italia. Tutti i diritti riservati.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Snackbar for form submission */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          Grazie per la tua prenotazione! Ti contatteremo presto per confermarla.
        </Alert>
      </Snackbar>
      
      {/* Menu Completo Dialog */}
      <Dialog
        fullScreen={fullScreen}
        maxWidth="lg"
        fullWidth
        open={menuOpen}
        onClose={handleMenuClose}
        scroll="paper"
        aria-labelledby="menu-dialog-title"
      >
        <DialogTitle id="menu-dialog-title" sx={{ 
          p: 2, 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(0,0,0,0.1)'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <RestaurantIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6">Menu Trattoria Bella Italia</Typography>
          </Box>
          <IconButton edge="end" color="inherit" onClick={handleMenuClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ p: 0 }}>
          <FullMenu />
        </DialogContent>
      </Dialog>
    </div>
  );
}
