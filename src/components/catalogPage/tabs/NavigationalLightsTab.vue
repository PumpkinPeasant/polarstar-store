<template>
  <div class="lightsTab">
    <h1>Навигационные огни</h1>
    <div class="lightsSettingsBlock">

      <div class="chipsAndSearchBar">
        <div class="chips">
          <v-chip  :outlined="!explosionProtection"
                  v-model="explosionProtection" @click="explosionProtection = !explosionProtection">
            Взрывозащищённые
            <v-icon v-show="explosionProtection" style="font-size: 20px" class="pl-2">
              mdi-close
            </v-icon>
          </v-chip>
          <v-chip :outlined="!autonomousPower" v-model="autonomousPower"
                  @click="autonomousPower = !autonomousPower">
            Автономное питание
            <v-icon v-show="autonomousPower" style="font-size: 20px" class="pl-2">
              mdi-close
            </v-icon>
          </v-chip>
          <v-chip :outlined="!led" v-model="led" @click="led = !led">
            Светодиодные
            <v-icon v-show="led" style="font-size: 20px" class="pl-2">
              mdi-close
            </v-icon>
          </v-chip>
        </div>
        <div class="searchBar">
          <v-text-field
              class="searchBarField"
              label="Поиск по категории"
              clearable
              color="#5BC0BE"
              hide-details
              outlined
          >
          </v-text-field>
          <div class="searchBarButton">
            <v-icon color="white">mdi-magnify</v-icon>
          </div>
        </div>
      </div>
      <div class="filtersBar">
        <div class="filterMenu"
             id="allFilters">
          <div class="filterMenuName">
            <v-icon left>mdi-filter-outline</v-icon>
            <span>Все фильтры</span>
          </div>
        </div>
        <v-menu offset-y v-model="priceMenuVisible">
          <template v-slot:activator="{ on, attrs }">
            <div
                class="filterMenu"
                id="filerPrice"
                v-bind="attrs"
                v-on="on">
              <div class="filterMenuName">
                <span>Цена</span>
              </div>
              <div class="filterMenuButton">
                <v-icon>{{ priceChevron }}</v-icon>
              </div>
            </div>
          </template>
          что нибудь
        </v-menu>
        <v-menu offset-y v-model="powerMenuVisible">
          <template v-slot:activator="{ on, attrs }">
            <div
                class="filterMenu"
                id="filerPower"
                v-bind="attrs"
                v-on="on">
              <div class="filterMenuName">
                <span>Мощность, Вт</span>
              </div>
              <div class="filterMenuButton">
                <v-icon>{{ powerChevron }}</v-icon>
              </div>
            </div>
          </template>
          что нибудь
        </v-menu>
        <v-menu offset-y v-model="visibilityMenuVisible">
          <template v-slot:activator="{ on, attrs }">
            <div
                class="filterMenu"
                id="filerVisibility"
                v-bind="attrs"
                v-on="on">
              <div class="filterMenuName">
                <span>Видимость, миль</span>
              </div>
              <div class="filterMenuButton">
                <v-icon>{{ visibilityChevron }}</v-icon>
              </div>
            </div>
          </template>
          что нибудь
        </v-menu>
      </div>
      <div class="items">
        <template v-for="(item,index) in items">
          <item
              :item="item"
              :key="item.img"
              :index="index"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/catalogPage/Item';

export default {
  name: "NavigationalLightsTab",
  components: {
    Item
  },
  data() {
    return {
      explosionProtection: false,
      autonomousPower: false,
      led: false,
      priceMenuVisible: false,
      powerMenuVisible: false,
      visibilityMenuVisible: false,
      items: [
        {
          name: 'Tricolor RB 2NM',
          param1: 'Расход энергии, Вт',
          value1: '1-5',
          param2: 'Видимость, миль',
          value2: '2-5',
          param3: 'Вес, кг',
          value3: '0.3-0.5',
          price: '5 900 ₽',
          img: 'navlights1.png'
        },
        {
          name: 'Tricolor RB 2NM',
          param1: 'Расход энергии, Вт',
          value1: '1-5',
          param2: 'Видимость, миль',
          value2: '2-5',
          param3: 'Вес, кг',
          value3: '0.3-0.5',
          price: '5 900 ₽',
          img: 'navlights1.png'
        },
        {
          name: 'Tricolor RB 2NM',
          param1: 'Расход энергии, Вт',
          value1: '1-5',
          param2: 'Видимость, миль',
          value2: '2-5',
          param3: 'Вес, кг',
          value3: '0.3-0.5',
          price: '5 900 ₽',
          img: 'navlights1.png'
        },
        {
          name: 'Tricolor RB 2NM',
          param1: 'Расход энергии, Вт',
          value1: '1-5',
          param2: 'Видимость, миль',
          value2: '2-5',
          param3: 'Вес, кг',
          value3: '0.3-0.5',
          price: '5 900 ₽',
          img: 'navlights1.png'
        },
        {
          name: 'Tricolor RB 2NM',
          param1: 'Расход энергии, Вт',
          value1: '1-5',
          param2: 'Видимость, миль',
          value2: '2-5',
          param3: 'Вес, кг',
          value3: '0.3-0.5',
          price: '5 900 ₽',
          img: 'navlights1.png'
        },
        {
          name: 'Tricolor RB 2NM',
          param1: 'Расход энергии, Вт',
          value1: '1-5',
          param2: 'Видимость, миль',
          value2: '2-5',
          param3: 'Вес, кг',
          value3: '0.3-0.5',
          price: '5 900 ₽',
          img: 'navlights1.png'
        },
        {
          name: 'Tricolor RB 2NM',
          param1: 'Расход энергии, Вт',
          value1: '1-5',
          param2: 'Видимость, миль',
          value2: '2-5',
          param3: 'Вес, кг',
          value3: '0.3-0.5',
          price: '5 900 ₽',
          img: 'navlights1.png'
        },

      ],
    }
  },
  computed: {
    priceChevron() {
      if (this.priceMenuVisible) {
        return 'mdi-chevron-up'
      }
      return 'mdi-chevron-down';
    },
    powerChevron() {
      if (this.powerMenuVisible) {
        return 'mdi-chevron-up'
      }
      return 'mdi-chevron-down';
    },
    visibilityChevron() {
      if (this.visibilityMenuVisible) {
        return 'mdi-chevron-up'
      }
      return 'mdi-chevron-down';
    }
  }
}
</script>

<style scoped lang="scss">
.lightsTab {
  h1{
    font-family: Jost, sans-serif;
    font-weight: 500;
    font-size: 52px;
    letter-spacing: -0.03em;
  }
}

.chipsAndSearchBar {
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2vh;
}
.chips{
  display: flex;
  gap: 1vw;
  .v-chip {
    border: 2px solid #5BC0BE;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
  .v-chip:hover{
    box-shadow: 0 0 5px 1px rgba(112,234,231,0.7);
  }
  .v-chip--active{
    background-color: #5BC0BE;
    border: none;
    color: white;
  }
}
.searchBar {
  width: 100%;
  display: flex;
  .v-text-field--outlined{
    border: none;
  }
}
.searchBarField{

}
.v-text-field--outlined{
  border-radius: 0;
}
.searchBarButton {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5BC0BE;
  cursor: pointer;
  width: 5.5vh;
}
.searchBarButton:hover > .v-icon{
  font-size: 35px;
}
.filtersBar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 5.5vh;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #0B132B;
}

.filterMenu {
  display: flex;
  border: 1px solid #F2F2F2;
  align-items: center;
  justify-content: space-between;
  transition: 0.5s;

  span {
    justify-self: center;
  }
}

.filterMenu:hover {
  background-color: #F2F2F2;
}

.filterMenuName {
  display: flex;
  justify-content: center;
  width: 100%;
}

.filterMenuButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.5vh;
  background-color: #F2F2F2;
  height: 100%;
}

#allFilters {
  background-color: #F2F2F2;
  cursor: pointer;
}

.items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 100%;
  gap: 1vw;
  padding-top: 8vh;
}

.v-menu__content {
  box-shadow: none;
  border: 1px solid #F2F2F2;
  border-top: none;
}
</style>
