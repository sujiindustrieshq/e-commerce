
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext.jsx';
import { calculateCartTotal } from '@/utils/mockData.js';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const CartPage = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart } = useCart();
  const totals = calculateCartTotal(items);

  const handleQuantityChange = (bookId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(bookId);
      toast.success('Item removed from cart');
    } else {
      updateQuantity(bookId, newQuantity);
    }
  };

  const handleRemove = (bookId) => {
    removeFromCart(bookId);
    toast.success('Item removed from cart');
  };

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Shopping cart - BookStore</title>
          <meta name="description" content="Your shopping cart" />
        </Helmet>

        <Header />

        <div className="container-custom py-16">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6">
              Start adding books to your cart to see them here
            </p>
            <Button asChild>
              <Link to="/products">Browse books</Link>
            </Button>
          </div>
        </div>
        "sun ye sab hua mene bhi bahut kuch socha tera baat then tune kaha tha soch ke batana to mai galtiya mene bhaut ki h to uska pay to krna hoga and mai ab force nhi krna chata ki mere paass aao and tumne bhi kaha tha ki mujhe ab love pe trust nhi aage ka pta nhi but boli thi so isliye mai yahi socha hu ki filal 1yr tak baat na krna hi sahi hoga and tune bhi kaha tha ki mere se baat krego phir tumko bhi hope hoga expection hoga love ka so yes baat krunga to hoga jarur hoga and ek aur baat teri dost sahi thi mai manupilated bhaut krnta hu sabko krta hu taki ladai jada na ho and shant ho ladia and tumko bhi kiya hu bhaut baar mai manta hu then dusra baat mai possive bhaut hu jese tumne kaha tha then galtiya mene bhi kiya bahut yash ne bhi meko direct bola tu ek no. ka harmai h tu nahi ja better hoga and haa mai bhi nhi chahta ki mai teko aur pareshan kru then wo boli nhi esa nhi h mai bola nhi esa hi h ye sab soch ke bola hu mai and boli esa kuch nhi h tumne jada soch liya h mene kaha tha tum jada mat sochna mene bola nhi mene nhi socha and abhi tu bhi 11th mai h mai bhi drop mai hu and mai baat krunga hope hoga ki aage love hoga dono ko and wapis mai aata hu to wo tumhra dar tha pta nhi and mai bhi jabardasti nhi jana chahunga and teko bhi life mai wo milega jo mere se nhi mila ek min script bhul gya 
        so and teko bhi trust nhi h ab to mai bol bol ke ki turst me bolna cheap hoga and filal sahi hoga ki mai khud ko time du na ki promice ki aage ye krente and meko pahlel mkeo time dena hoga khud pe and aage humdono milte h to achi baat h and teri friend and teri udhar se bhi sab mere against h to meko jana sahi nhi hoga  and boli are kya bole ja rhe ho then bola nhi ye sab such bol rha honest h clear bol rha and boli nhi tune soch bhaut jada liya mene mana kiya tha itna nhi sochna then mai bola career banao  
        
        then boli suno ab meri baat tumne na honstly batu tumne bhaut socha h tumko lag rha ki tum yaha pe sirf galat h lekin ye scuh nhi h mene paros tumko jo bhi kaha tha mene shant hoke chill hoke kaha tha then mai bola mai bhi to aara m se hi bol rha first time itna slow bola to such h aage milna na milna 
        then boli to ese normaly bhi baat ktam and mai bola h normal bhi baat krogi meko hope expectation rhega ki love hoga
        then boli mera kya meko fark to padega pahle aaye the baat band ho gaya phir wapis aaye phir band kr doge meri bhi mentialy pe asar aayega na then mai bola ki haa thoda sa dikkat hoga but future mai nhi abhi thoda lagega lekin aage nhi hoga then 5min sleietn then boli mil gayi na tumko koi mai bola nhi ab nhi chahiye nhi aur kisi ka life barbad krna h then boli are tum jada nhi soch liye ho tum sirf ye samaj rhe ho sirf tumahrei galti h bas sochte gaye mere bare mia socha ki mera dimag mai kya hcla hra kuch chal hi nhi hra haa and tumne jada soch liya h isme mujhe kuch bhi sahi nhi lga tumhra baat 1% samj nhi aaya dekho suno meri baat phale hamrei baat hui amaong us pe phir discord phir pyar hua hu phir aur baate hue itne pyar love support phir ek misundarstanting se baat band ho gaya phir 5 month phir se baat start hui and 2 din baat hui phir wapis baat band ye chal kya rha thik h mana abhi tumra jee chal rha lekin life time baat kese ho gayi Then mai bola mene ye kab kaha bas 1yr then aage ka pta nhi kya hoga kya nhi 
        then kriti boli suno ab mai apni dil ke baat batati hu saaf saaf such suno pahle to mai tumhe bhul nih sakti bhatu imp h mere lie dusri baat mera attactment tumhre liye kabhi katma hone wala h and tisre baat yaha 3sec ruki thenboli mene maafi mangi tumne maafi mangi and baat band kr doge mera kya hoga socha h kabhi and ye bolna h ki meri tumse attachment nhi tutegei kabhi bhi nhi andboli mai tumse clam se puch rhi tumhe chota se chota hi doubt ho ladai ka pahel wala to mere sse clear to kre chae wo meko bura lage ya nhi tum pucho to sahi pucho bas tum and tumne meko roka tha and mai nhi ruki to mai nhi bolti na mai aalge din hi aayi thi bolne ki ek tappad padega na ye sab bola h to lekin tum mere bolnse pahle hi breakup kr diye and block kyuiki meko rehna h tumhre sath 
        then maibola thik mai mai btata hu mera firest time trust kaha tuta tha yaad h raj naam ka id tha kriti boli haa mene usko bhai bola usne bola meko bhai mat bolo mene bola ok raj then mai bola nhi ye baat nhi 
        tumne meko bataya tha mene kaha tha block kr do tumne kaha ok but phir bhi block nhi ki thi and baat kr rhi thi upar se apna id ka password bhi change kr di thi then agle din jab teko bola ye sab then react krne lagi and tu hi bolne lagi ki mene pahle hi kaha tha relationshipp mai nhi aane ko to batao kriti kya ye mera galti tha 
        to meko yaha laga ki mai yaha burden bna rha terepe then tune bhi kaha tha kaas amaoung us pe nhi milte  
        then dhire dhire tune bola exam ke baad krte h then boli mera sara photo delet kr do and mene bola ok sabse dur rehne as a protective guy tune kaha baat to krungi sabse mene kaha ladko se bhi tune kaha ha ladko se bhi and yahi to age hota h krne ka then waha meri pura mental chud gaya and wahi se meko lga meko nhi jana chahiyte tere sath and wo yatharath  bhi to isliye mai gaya tha breakup ye sab 
        
        then boli pagal ho tum kitni misundarstanging hui suno ab meri baat pahli baat mera bhi trust kab tuta jab tune kaha tha ki  ek bhaorsa tha tumpe ki tum meri rahogi ab ksisi se baat nhi kroga ab meko wo bhi bahrosa nhi tab mera trust nhi sab tut gaya tha ki ye suji ne hi bola ha ya koi aur bola kuyiki mere mummy papa bhi bola tha ki tumse kuch nhi hga sab tera bhai hi krega tumpe bhaorsa nhi and tumne bhi ya hi kaha to mera dimag hi badn kr diya tha and esa ki tum mere liye burder hote tum pagalho mene kabhi esa socha bhi nhi pagal and burden ban rhe hote to jab mummy ko bpta chal atha tere bare mai tab hi baat band kr deti and mene contiune kiya tha ki chlo aage baat krenge and yahi soch rha tha abhi to sab against bol rhe lekin aage mai prove krugi suji sahi h ki ye mujhse love krta h and meri yaha se sabse badi galtiye thi  ki mene ye sab ko leke advice li kyuki mera ye sab first time tha to mkeo pta nhi tha kya krna chahaiye tna and and tumne kaha meko male firens pasand nhi mai hu introvert and mai yahi chahta thi  and mai sirf ladko ka attention nhi chahta itna bhi gira hu mat samjo ab nah i mere jada dost h aur mai bola aurr then ruki 1min then boli aur ye ki umm honstly batau to i love  you thik h hamesa hamesa hemasas mltb jab tum mile ho tab se and aaj tak tum dekho ktam nhi hota h mene yahi sab hua 58 min mai then mummy phone mange lagi to mai bola thik h meko jana hoga to boli to kya wapis nhi aaoge tum then bola are kal aa jana kal pura bta dunga discord pe and jada sochne mat 1yr  baat nhi hoga utna but 1yr baad aaunga milne then aage bhawgwan bharose then call cut kr diya ab kal discord pe aayi then tab fialsa hoga ki life time baat hoga ya nhi   "

        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Shopping cart (${items.length}) - BookStore`}</title>
        <meta name="description" content="Review your shopping cart" />
      </Helmet>

      <Header />

      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex gap-6">
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-32 object-cover rounded-lg"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-semibold mb-1 hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-4">{item.author}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-lg font-bold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemove(item.id)}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 border border-border sticky top-24">
              <h2 className="font-semibold text-lg mb-4">Order summary</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${totals.subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {parseFloat(totals.shipping) === 0 ? 'Free' : `$${totals.shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-medium">${totals.tax}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between mb-6">
                <span className="font-semibold text-lg">Total</span>
                <span className="font-bold text-2xl text-primary">${totals.total}</span>
              </div>

              <Button
                className="w-full mb-3 transition-all duration-200 active:scale-95"
                onClick={() => navigate('/checkout')}
              >
                Proceed to checkout
              </Button>

              <Button variant="outline" className="w-full" asChild>
                <Link to="/products">Continue shopping</Link>
              </Button>

              {parseFloat(totals.subtotal) < 50 && (
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Add ${(50 - parseFloat(totals.subtotal)).toFixed(2)} more for free shipping
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
