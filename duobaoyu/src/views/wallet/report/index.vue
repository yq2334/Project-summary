<template>
    <div class="walletCount">
        <div class="tab_content">
            <div class="content_items">
                <div class="content_item" v-if="item.CurrencyId!=5 && item.CurrencyId!=4" v-for="(item,index) in detailData" :key="index">
                    <div class="item_title">{{item.WalletName}}</div>
                    <div class="item_content clear_box">
                        <div class="input_group input_group_inline_clearfix input_group_inline">
                            <label class="label">钱包内数量</label>
                            <input type="text" v-model="item.Amount" disabled class="input_form input_common">
                        </div>
                        <div class="input_group input_group_inline" v-if="item.Fee">
                            <label class="label">池塘投入量:</label>
                            <input type="text" v-model="item.Fee"  class="input_form input_common">
                        </div>
                    </div>
                </div>
          
             
                <div class="content_item">
                    <div class="item_title">鱼子/鱼苗</div>
                    <div class="item_content item_content_multi clear_box">
                        <div class="input_group input_group1 input_group_inline_clearfix input_group_inline">
                            <label class="label">鱼苗数量</label>
                            <input type="text" v-model="YmData.Amount" disabled class="input_form input_common">
                        </div>
                        <!-- <div class="input_group input_group2 input_group_inline">
                            <label class="label">历史总鱼苗数量:</label>
                            <input type="text" class="input_form input_common">
                        </div> -->
                        <div class="input_group input_group3 input_group_inline">
                            <label class="label">鱼子数量:</label>
                            <input type="text" v-model="YzData.Amount" disabled class="input_form input_common">
                            <button class="btn btn_active changeWallet" @click="btnDhym">
                                 <img src="static/imgs/wallet_3.png">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import * as ajax from "@/api/common";
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      detailData: false,
      YzData: false,
      YmData: false
    };
  },
  created: function() {
    this.bind();
  },
  methods: {
    bind() {
      ajax.post("/api/User/GetUserWallets", {}).then(response => {
        this.detailData = response.Data;
        this.detailData
          .filter(item => {
            return item.CurrencyId == 4;
          })
          .forEach(element => {
            this.YzData = element;
          });
        console.log("YzData", this.YzData);
        this.detailData
          .filter(item => {
            return item.CurrencyId == 5;
          })
          .forEach(item => {
            this.YmData = item;
          });
      });
    },
    btnDhym() {
      this.$router.push({
        path: "/wallet/report/form"
      });
    }
  },
  watch:{
    Fresh(val){
      if(val){
        this.bind()
      }
    }
  },
  computed:{
     ...mapGetters([
        'fresh'
      ]),
    Fresh(){
      return this.fresh.isFresh
    }
  }
};
</script>

<style>

</style>
