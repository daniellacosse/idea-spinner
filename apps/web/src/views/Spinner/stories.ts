import Spinner from "./Spinner.vue";
import args, { SpinnerProps } from "./props";

export default {
  args,
  argTypes: {
    handleSpin: {
      action: "spin"
    }
  },
  component: Spinner,
  title: "Views/Spinner",
  parameters: {
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true
      }
    }
  }
};

export const Example = ({
  isSpinning,
  maxColumns,
  wheels,
  handleSpin
}: SpinnerProps & { handleSpin: () => void; }) => ({
  components: { Spinner },
  setup() {
    return { handleSpin, isSpinning, maxColumns, wheels };
  },
  template: `
    <Spinner 
      :wheels="wheels" 
      :is-spinning="isSpinning"
      :max-columns="maxColumns" 
      @spin='handleSpin'
    />
  `
});