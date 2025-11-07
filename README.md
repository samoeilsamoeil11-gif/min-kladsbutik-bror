# 👕 Min Klädsbutik Bror

Detta är en enkel, responsiv och tillgänglig webbplats för en fiktiv klädbutik.  
Projektet är byggt **helt utan JavaScript** och följer kraven i kursuppgiften för semantisk HTML5 och modern CSS3.

---

## 🌐 Publik demo
Se sidan live här:  
👉 [https://samoeilsamoeil11-gif.github.io/min-kladsbutik-bror/](https://samoeilsamoeil11-gif.github.io/min-kladsbutik-bror/)

---

## 📂 Innehåll
Webbplatsen består av tre sidor:

- **index.html** – startsidan med fyra produkter: T-shirt, hoodie, byxor och skor.  
- **om.html** – berättar om butikens historia, värderingar och team.  
- **kontakt.html** – innehåller ett kontaktformulär och kontaktuppgifter.  
- **css/style.css** – extern CSS-fil för färger, layout och responsivitet.

---

## 🖼️ Skärmdumpar

### 💻 Desktopvy
![Desktopversion](images/desktop.png)

### 📱 Mobilvy
![Mobilversion](images/mobile.png)

> 📝 *Ladda upp dina egna bilder i mappen `/images/` med exakt dessa namn: `desktop.png` och `mobile.png`.*  
Du kan ta skärmdumpar genom att öppna din sida i webbläsaren och trycka:
- **Windows:** `Windows + Shift + S`
- **Mac:** `Cmd + Shift + 4`

---

## 🎨 Designbeslut

### 🎨 Färger
Jag valde:
- **Primärfärg:** mörkgrå `#222` – ger en modern och neutral känsla.  
- **Sekundärfärg:** guld `#c59d5f` – tillför lyxkänsla och fungerar som accentfärg.  
- **Bakgrund:** ljusgrå `#fafafa` – ger bra kontrast och är lätt för ögat.

Färgvalen uppfyller **WCAG AA-kontrastkraven**.

---

### 🔠 Typografi
Jag använde **Poppins** och **Segoe UI** eftersom de:
- är sans-serif (lätta att läsa på skärm)  
- har ett modernt och professionellt uttryck  
- fungerar bra i alla webbläsare och enheter  

Textstorlekarna styrs med `clamp()` vilket gör typografin **responsiv** och skalar mellan mobiler och datorer.

---

### 📐 Layout
- **Flexbox** används för navigation och footer → gör dem centrerade och flexibla.
- **CSS Grid** används för produkterna på startsidan (`.menu-grid`) → layouten ändras automatiskt vid olika skärmstorlekar.  
- Mobil-först-strategi: en kolumn som växer till 2 och 4 kolumner vid 600px och 1024px.

```css
@media (min-width: 600px) {
  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .menu-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
