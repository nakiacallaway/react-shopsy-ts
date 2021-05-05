  
enum TypeColor {
    electronics = ' #FFC107',
    jewelery = '#007BFF',
    mens_clothing = '#DC3545',
    womens_clothing = '#17A2B8',
    
  }
  export const setTypeColor = (type: string) => {
    switch (type) {
      case 'electronics':
        return TypeColor.electronics;
      case 'jewelery':
        return TypeColor.jewelery;
      case `men's clothing`:
        return TypeColor.mens_clothing;
      case `women's clothing`:
        return TypeColor.womens_clothing;
      
    }
  };