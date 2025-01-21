<template>
  <div>
    <div class="flex flex-row items-center relative z-10">
      <h1>{{ $translator.t("welcome") }}</h1>

      <div
        v-for="(item, index) in items.slice(0, 4)"
        :key="index"
        class="relative group hidden md:flex flex-col items-center h-16 pt-2"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave"
      >
        <button
          class="flex items-center relative space-x-2 text-xl text-black transition duration-300 py-2 px-3 focus:outline-none"
          @click="toggleDropdown(index)"
        >
          <v-badge
            v-if="typeof item.notifications === 'number' && item.notifications > 0"
            color="red"
            :content="item.notifications > 99 ? '99+' : item.notifications"
          >
            <v-icon>{{ item.icon }}</v-icon>
          </v-badge>
          <v-icon v-else>{{ item.icon }}</v-icon>

          <!-- ปรับให้ใช้ฟอนต์ขนาดเล็กลงหากเป็นภาษาไทย -->
          <span class="hidden xl:block text-md text-gray-400 truncate" :class="{ 'text-sm': isThai(item.name) }">
            {{ $translator.t(item.name.toLowerCase()) }}
          </span>
        </button>

        <div
          class="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300"
          :class="{
            'w-full': hoverIndex === index || openDropdownIndex === index,
            'w-0': hoverIndex !== index && openDropdownIndex !== index
          }"
        ></div>

        <Dropdown :visible="openDropdownIndex === index" :subItems="item.subItems" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openDropdownIndex: null, // เก็บ index ของ dropdown ที่ถูกเปิดอยู่ (เริ่มต้นไม่มี dropdown ไหนเปิด)
      hoverIndex: null, // เก็บ index ของเมนูที่เมาส์กำลังชี้อยู่ (เริ่มต้นไม่มีเมนูไหนถูกชี้)
      items: [
        // ข้อมูลเมนูทั้งหมด
        {
          name: "Work", // ชื่อเมนูที่จะแสดง
          icon: "mdi mdi-calendar-check", // ไอคอนที่จะแสดงในเมนู
          notifications: 0, // จำนวนการแจ้งเตือนในเมนูนี้
          subItems: [{ name: "SubItem 1-1" }, { name: "SubItem 1-2" }] // เมนูย่อย
        },
        {
          name: "Chat", // ชื่อเมนูที่จะแสดง
          icon: "mdi mdi-chat-processing-outline", // ไอคอนที่จะแสดงในเมนู
          notifications: 5, // จำนวนการแจ้งเตือนในเมนูนี้
          subItems: [{ name: "SubItem 1-1" }, { name: "SubItem 1-2" }] // เมนูย่อย
        },
        {
          name: "Notification",
          icon: "mdi mdi-bell",
          notifications: 15,
          subItems: [{ name: "SubItem 2-1" }, { name: "SubItem 2-2" }]
        },
        {
          name: "Setting",
          icon: "mdi mdi-cog",
          notifications: 105,
          subItems: [{ name: "SubItem 3-1" }, { name: "SubItem 3-2" }]
        }
      ]
    };
  },
  mounted() {
    // เมื่อ component ถูกโหลดเสร็จ ให้เพิ่ม event listener เพื่อตรวจจับการคลิกนอก component
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    // ก่อน component จะถูกทำลาย ให้ลบ event listener เพื่อลดการใช้หน่วยความจำ
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    isThai(text) {
      const regex = /^[\u0E00-\u0E7F]+$/;
      return regex.test(text);
    },
    toggleDropdown(index) {
      // ถ้า dropdown ที่คลิกอยู่เปิดแล้ว ให้ปิด
      // ถ้าไม่ได้เปิด ให้เปลี่ยน index นั้นเป็น openDropdownIndex
      this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
    },
    handleMouseEnter(index) {
      // เมื่อเมาส์ชี้ไปที่เมนู ให้บันทึก index ของเมนูที่ชี้
      this.hoverIndex = index;
    },
    handleMouseLeave() {
      // เมื่อเมาส์ออกจากเมนู ให้รีเซ็ต hoverIndex เป็น null
      this.hoverIndex = null;
    },
    handleClickOutside(event) {
      // ตรวจสอบว่าการคลิกเกิดนอก component หรือไม่
      // ถ้าใช่ ให้ปิด dropdown ทั้งหมด
      if (!this.$el.contains(event.target)) {
        this.openDropdownIndex = null;
      }
    }
  }
};
</script>

<style scoped>
/* ลดขนาดฟอนต์เฉพาะในกรณีที่เป็นภาษาไทย */
.text-sm {
  font-size: 0.875rem; /* ขนาดฟอนต์เล็กลง */
}
</style>
