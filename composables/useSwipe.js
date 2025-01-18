import { ref } from "vue";

export function useSwipe() {
  let startY = 0,
    endY = 0;
  const isDropdownOpen = ref(false); // เปิด/ปิด dropdown

  const startTouch = (event) => {
    const touch = event.touches[0];
    startY = touch.clientY; // ตำแหน่งเริ่มต้นของการทัช
  };

  const endTouch = (event) => {
    const touch = event.changedTouches[0];
    endY = touch.clientY; // ตำแหน่งที่ทัชจบ

    const deltaY = endY - startY; // คำนวณความต่างของ Y
    if (deltaY > 50) {
      // ปัดลง -> แสดง dropdown
      isDropdownOpen.value = true;
    } else if (deltaY < -50) {
      // ปัดขึ้น -> ซ่อน dropdown
      isDropdownOpen.value = false;
    }
  };

  const toggleDropdown = () => {
    // สลับสถานะของ dropdown
    isDropdownOpen.value = !isDropdownOpen.value;
  };

  return {
    isDropdownOpen,
    startTouch,
    endTouch,
    toggleDropdown,
  };
}
