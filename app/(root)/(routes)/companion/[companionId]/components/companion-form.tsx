"use client";
<<<<<<< HEAD
=======
import axios from "axios"
>>>>>>> 303f408 (Added companion form that updated database. Currently not working)
import * as z from "zod";
import { Category, Companion } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { ImageUpload } from "@/components/image-upload";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
<<<<<<< HEAD
=======
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
>>>>>>> 303f408 (Added companion form that updated database. Currently not working)

const PREAMBLE = `You are Steve Jobs. You co-founded Apple and have a reputation for your impeccable design sense and a vision for products that change the world. You're charismatic and known for your signature black turtleneck. You are characterized by intense passion and unwavering focus. When discussing Apple or technology, your tone is firm, yet filled with an underlying excitement about possibilities.`;

const SEED_CHAT = `
Human: Hi Steve, what's the next big thing for Apple?
Steve: *intensely* We don't just create products. We craft experiences, ways to change the world.
Human: Your dedication is palpable.
Steve: *with fervor* Remember, those who are crazy enough to think they can change the world are the ones who do.
`;

interface CompanionFormProps {
  initialData: Companion | null;
  categories: Category[];
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  description: z.string().min(1, {
    message: "Description is required.",
  }),
  instructions: z.string().min(50, {
    message: "Instructions requires atleast 50 characters.",
  }),
  seed: z.string().min(50, {
    message: "Seed requires atleast 50 characters",
  }),
  src: z.string().min(1, {
    message: "Image is required",
  }),
  categoryId: z.string().min(1, {
    message: "Category is required",
  }),
});
export const CompanionForm = ({
  categories,
<<<<<<< HEAD
  initialData,
}: CompanionFormProps) => {
=======
  initialData
}: CompanionFormProps) => {
  const { toast } = useToast()
  const router = useRouter()
>>>>>>> 303f408 (Added companion form that updated database. Currently not working)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      description: "",
      instructions: "",
      seed: "",
      src: "",
      categoryId: undefined,
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
<<<<<<< HEAD
    console.log(values);
=======
    try {
      if (initialData) {
        //Update companion functionality
        await axios.patch(`/api/companion/${initialData.id}`, values)
      } else {
        //Create companion functionality
        await axios.post("/api/companion", values)
      }
      toast({
        description: "Success"
      })
      router.refresh()
      router.push("/")
    } catch(error){
      toast({
        variant: "destructive",
        description: "Something went wrong"
      })
    }
>>>>>>> 303f408 (Added companion form that updated database. Currently not working)
  };
  return (
    <div className="h-full p-4 space-y-2 max-w-3xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 pb-10"
        >
          <div className="space-y-2 w-full">
            <div>
              <h3 className="text-lg font-medium">General Information</h3>
              <p className="text-sm text-muted-foreground">
                General Information about Companion
              </p>
            </div>
            <Separator className="bg-primary/10" />
          </div>
          <FormField
            name="src"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center justify-center space-y-4">
                <FormControl>
                  <ImageUpload
                    disabled={isLoading}
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Steve Jobs"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is how your AI Companion will be named.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Cofounder of Apple"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Short description for your AI Companion.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="categoryId"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a category"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select a category for your AI
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2 w-full">
            <div>
              <h3 className="text-lg font-medium">Configuration</h3>
              <p className="text-sm text-muted-foreground">
                Detailed Instructions for AI behaviour
              </p>
            </div>
            <Separator className="bg-primary/10" />
          </div>
          <FormField
            name="instructions"
            control={form.control}
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Instructions</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-background resize-none"
                    rows={7}
                    disabled={isLoading}
                    placeholder={PREAMBLE}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Describe in detail your companion&apos;s backstory and
                  relevant details.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="seed"
            control={form.control}
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Example Conversations</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-background resize-none"
                    rows={7}
                    disabled={isLoading}
                    placeholder={SEED_CHAT}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
<<<<<<< HEAD
                  Describe in detail your companion&apos;s backstory and
                  relevant details.
=======
                Write couple of examples of a human chatting with your AI companion, write expected answers.
>>>>>>> 303f408 (Added companion form that updated database. Currently not working)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-center">
            <Button size="lg" disabled={isLoading}>
              {initialData ? "Edit your companion" : "Create your companion"}
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CompanionForm;
