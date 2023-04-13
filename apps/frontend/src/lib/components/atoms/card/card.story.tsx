import { Meta, StoryFn } from "@storybook/react";
import { Card } from "./card";

// Config:
export default {
  title: "Atoms/Card",
  component: Card
} satisfies Meta<typeof Card>;

// Template:
const Template: StoryFn<typeof  Card> = args => (
  <Card className="space-y-3" {...args}>
    <p className="text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Animi, consequatur accusantium ducimus placeat iste corporis facilis officiis autem.
      Explicabo necessitatibus voluptas sequi blanditiis corrupti laboriosam sed perferendis iure veniam quasi.
    </p>

    <p className="text-white">
      Distinctio ex quod asperiores omnis. Numquam aliquid tempora fugiat consequuntur,
      sapiente nam culpa quos libero ex nostrum quibusdam aut obcaecati, dicta vero.
    </p>
  </Card>
);

// Stories:
export const Default = Template.bind({});
Default.args = {};