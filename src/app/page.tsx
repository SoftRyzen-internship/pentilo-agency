import { ExampleSection } from '@/views/ExampleSection';
import { Countdown } from '@/components/ui/Countdown';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <>
      <Countdown into="hero" />
      <Button
        tag="a"
        accent={true}
        content="some text"
        className="xl:w-[180px] mb-[10px]"
      />
      <Button
        tag="button"
        accent={true}
        content="some text"
        className="mb-[10px]"
      />
      <Button
        tag="button"
        buttonType="submit"
        accent={true}
        content="some text"
        className="xl:w-[180px] mb-[10px]"
      />
      <Button
        tag="a"
        accent={false}
        content="some long text"
        className="xl:w-[180px] xl:py-[14.9px] mb-[10px]"
      />
      <Button
        tag="button"
        accent={false}
        content="І разом з ними ми досягли ось таких результатів в проектах"
      />
      <ExampleSection />
    </>
  );
}
