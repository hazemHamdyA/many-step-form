import { ref, reactive, computed } from "vue";
import type { Ref } from "vue";

interface Test {
  [inex: string]: string;
}

interface UseObject {
  curNumber?: { value: number } | number;
  nextPage?: Function;
  previousPage?: Function;
  setSelectedPlan?: Function;
  selectedPlan?: { value: string } | string | Test;
  getPrices?: Function;
  addTooffer?: Function;
  total?: { value: number } | number;
  mainPlan?: { name: string; timeStamp: string; price: number };
  offers: any;
}

interface MainPlan {
  name: string;
  timeStamp: string;
  price: number;
}

interface testTwo {
  Monthly?: number;
  Yearly?: number;
  body?: string;
  id?: string;
  isChecked?: boolean;
  title?: string;
}

const curNumber: Ref<number> = ref(1);
const selectedPlan: Ref<string> = ref("Monthly");
const mainPlan: MainPlan = reactive({
  name: "pro",
  timeStamp: selectedPlan.value,
  price: 9,
});

if (curNumber.value > 4) {
  curNumber.value = 4;
}

const offers = reactive([]);
const total = computed((): number => {
  const prices = offers.map((e: testTwo) => {
    // @ts-ignore
    return e[selectedPlan.value];
  });
  prices.push(mainPlan?.price);
  return prices.reduce((acc, cur) => +acc + +cur, 0);
});

const getPrices = ({ mo, yl }: { mo: string; yl: string }) => ({
  Monthly: mo,
  Yearly: yl,
});

const addTooffer = function (obj: any): void {
  // @ts-ignore
  offers.push(obj);
};
const nextPage = function (): void {
  curNumber.value++;
};
const previousPage = function (): void {
  curNumber.value--;
};

const setSelectedPlan = function (nwPlan: string) {
  selectedPlan.value = nwPlan;
};

export const useMutation = function (): UseObject {
  return {
    curNumber,
    nextPage,
    previousPage,
    setSelectedPlan,
    selectedPlan,
    getPrices,
    addTooffer,
    total,
    mainPlan,
    offers,
  };
};

// testing in plain js
/*
if (something<input> 'comprison' output){
  throw new Error (error message)
}
*/

// testing in jest
/*
it("error message'test name'",()=>{
  except(something<input>).toBe(output)
})
*/
